import datetime
from googleapiclient.discovery import build
import gkeepapi
import gKeep
import gCal
import config
import traceback
from copy import deepcopy

import googleapiclient.discovery
import firebase_admin
from firebase_admin import credentials, firestore
from google.cloud.firestore_v1beta1 import ArrayRemove, ArrayUnion
from concurrent.futures import wait, ALL_COMPLETED
import logging
from db import addDaysToString, days_in_month, getMYD, fill, sortEntries, entries_to_array
import re; re._pattern_type = re.Pattern
cred = credentials.Certificate("key.json")
firebase_admin.initialize_app(cred)

db = firestore.client()


class ClientService:

    def __init__(self, calendarCredentials, keepCredentials, keepi):
        try:
            # First setup calendar

            cal = googleapiclient.discovery.build('calendar', 'v3', credentials=calendarCredentials)

            # TODO: what if a thread accesses a variable at the same time? == atomic

            # Fetch clients timezone
            self.TIMEZONE = cal.settings().get(setting='timezone').execute()['value']

            # Loop through calendars to see if one is already called "Spaced"
            # Otherwise create it
            calID = None  # the ID of the calendar we will use
            page_token = None
            while True:
                calendar_list = cal.calendarList().list(pageToken=page_token).execute()
                for calendar_list_entry in calendar_list['items']:
                    print(calendar_list_entry['summary'])
                    if calendar_list_entry['summary'] == config.calendar['summary']:
                        calID = calendar_list_entry['id']
                        break
                page_token = calendar_list.get('nextPageToken')
                if not page_token:
                    break

            if not calID:
                created_calendar = cal.calendars().insert(body=config.calendar).execute()
                calID = created_calendar['id']

            # Then setup keep


            doc_ref = db.collection('users').document(keepCredentials['username'])
            doc_ref.set({
                'name': keepCredentials['username'],
            }, merge=True)

            print("Keep created")

            self.calID = calID
            self.cal = cal
            self.keep = keepi
            self.userName = keepCredentials['username']

        except Exception as e:
            print(e)

    def createEvent(self, title, desc, dateCreated):
        logging.basicConfig(filename='myapp.log', level=logging.INFO)
        try:
            print("Create event?", title, desc, dateCreated)
            doc_ref = db.collection('users').document(self.userName)
            doc = doc_ref.get().to_dict()
            currentMonth = datetime.datetime.now().month
            print("todict")
            # print(doc['tasks'])

            if not 'tasks' in doc:
                print("in if")
                doc_ref.set({
                    'name': self.userName,
                    'currMonth': currentMonth,
                    'tasks': True,
                    '0': [],
                    '1': [],
                    '2': [],
                    '3': [],
                    '4': [],
                    '5': [],
                    '6': [],
                    '7': [],
                    '8': [],
                    '9': [],
                    '10': [],
                    '11': [],
                    '12': []
                }, merge=True)

            print("created firebase")

            # monthOffset = 0
            print("beforebatch")
            fireBatch = db.batch()
            calBatch = self.cal.new_batch_http_request()
            print("afterbach")

            for r in gCal.spacings:
                time = dateCreated + datetime.timedelta(days=r)
                time = time.strftime('%Y-%m-%d')
                print("working????")
                month = int(time.split("-")[1])
                print("after split")
                # monthOffset = int(time.split("-")[1]) - datetime.datetime.now().month
                # print(monthOffset)

                timers = time

                time += "T00:00:00-00:00"

                event = gCal.eventSchema(title, desc, time, self.TIMEZONE)

                print("a")
                calBatch.add(self.cal.events().insert(calendarId=self.calID, body=event))
                print(event.get('htmlLink'))

                print("b")
                month = str(month)

                fireBatch.update(doc_ref, {
                    month: ArrayUnion([{
                        'title': title,
                        'desc': desc,
                        'date': timers,
                    }])
                })
                print("c")

            print("a1")

            fireBatch.commit()
            calBatch.execute()
            print("a2")

        except Exception as e:
            print(e)

    def space_out(self):
        try:
            currMonth = 3
            currDate = datetime.datetime.today()

            InitPadding = 3  # do not space out the first n - 2 ( -2, because needs to look at neighbours) days.

            doc_ref = db.collection("users").document(self.userName)
            data = doc_ref.get().to_dict()
            fireBatch = db.batch()
            for month in range(currMonth, 13):
                print(month)
                thisMonthsData = data[str(month)]
                oldMonth = deepcopy(thisMonthsData)
                doNothing = 0
                # while doNothing < len(thisMonthsData)-1:
                entryCount = 0
                for entry in thisMonthsData:
                    day = getMYD(entry["date"], "day") - 1
                    # print(thisMonthsData)
                    if currDate + datetime.timedelta(days=InitPadding) < datetime.datetime.strptime(entry["date"],
                                                                                                    "%Y-%m-%d") \
                            and "changed" not in entry and day >= 2 and day <= days_in_month(month) - 2:
                        arr = entries_to_array(thisMonthsData)

                        print("day to check", arr, day)
                        neighbours = [arr[day - 2], arr[day - 1], arr[day + 1], arr[day + 2]]
                        index = 0
                        best = neighbours[0]
                        count = 1
                        for j in range(1, len(neighbours)):
                            if neighbours[j] + j / 4 < best:
                                index = j
                                best = neighbours[j] + j / 4
                            count += 1
                        # print (index)
                        # print( neighbours)
                        print(neighbours, arr[day], index)
                        if neighbours[index] >= arr[day]:
                            doNothing += 1
                        else:
                            print("inif")
                            if index <= 1:
                                index -= 2
                            else:
                                index -= 1
                            print("kidnex ", index)
                            newDate = addDaysToString(entry["date"], index)
                            if getMYD(newDate, "month") == month:
                                entry["date"] = newDate
                                # the problem is that sees a 0 and subtracts one day from date leading to 31st
                                thisMonthsData[entryCount]["date"] = entry["date"]  # not necce
                                thisMonthsData[entryCount]["changed"] = True
                                print(thisMonthsData[entryCount]["date"])
                                sortEntries(thisMonthsData)
                            else:
                                print("OH AWSDHFJZSDJAFAJDFSJASDFJASDJFJASDFJA")

                    else:
                        if "changed" in entry:
                            del entry["changed"]
                        doNothing += 1

                    entryCount += 1

                fireBatch.update(doc_ref, {
                    str(month): thisMonthsData
                })
                data[str(month)] = thisMonthsData
                neww = entries_to_array(thisMonthsData)
                print("OLDDDDDDD", entries_to_array(oldMonth), "EMND DOLDDLDLdd", )
                print("NEWWWWWWW", neww, len(neww))
            fireBatch.commit()
            print("calling refresh (Ring ring)")
            print(data)
            self.refreshCalendar(data)
        except Exception as e:
            print(e)

    def refreshCalendar(self, data):
        try:
            print("refreshing calendar")
            # doc_ref = db.collection("users").document(self.userName)
            self.cal.calendars().delete(calendarId=self.calID).execute()
            # data = doc_ref.get().to_dict()
            calBatch = self.cal.new_batch_http_request()
            created_calendar = self.cal.calendars().insert(body=config.calendar).execute()
            self.calID = created_calendar['id']
            count = 0
            for i in range(1, 13):
                print("motnh:", i)
                # print(data)
                for entry in data[str(i)]:
                    try:
                        count += 1
                        time = entry["date"] + "T00:00:00-00:00"
                        event = gCal.eventSchema(entry["title"], entry["desc"], time, self.TIMEZONE)
                        calBatch.add(self.cal.events().insert(calendarId=self.calID, body=event))
                        if count >= 499:
                            calBatch.execute()
                            count = 0
                    except Exception as e:
                        print(e)
            if count > 0:
                calBatch.execute()
        except Exception as e:
            print(e)
    # def removeOld(self):
    #     if()
    #
    # def addFromDB(self):


def threadWork(obj):
    try:
        obj.keep.sync()
        gnote = obj.keep.find(labels=[obj.keep.findLabel('spaced')], archived=False, trashed=False)
        # print(gnote)
        if gnote:
            # config.threadPool.submit(work, obj, gnote)
            # print("Runnin work")
            # note technically this will not work if two equal google keep accounts  are used
            empty = True
            for item in gnote:
                if empty is True:
                    empty = False
                config.threadPool.submit(gKeep.addToList, obj.keep, item)
                config.threadPool.submit(obj.createEvent, item.title, item.text, item.timestamps.created)
                config.threadPool.submit(item.delete)

                print("deleted?")
            if not empty:
                obj.keep.sync()
            # print("gunnin")
        # print("done")
    except Exception as e:
        x = 0
        # print(e, traceback.format_exc())


def startLoop():
    while 1:
        arrayOfFutures = []
        for obj in config.clientServices:
            arrayOfFutures.append(config.threadPool.submit(threadWork, config.clientServices[obj]))

        wait(arrayOfFutures, timeout=None, return_when=ALL_COMPLETED)
