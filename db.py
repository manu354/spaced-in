from random import randint
import firebase_admin
from firebase_admin import credentials, firestore
from google.cloud.firestore_v1beta1 import ArrayRemove, ArrayUnion
import datetime
from copy import deepcopy


#
# FOR SPACE OUT FUNCTION
#

# cred = credentials.Certificate("key.json")
# firebase_admin.initialize_app(cred)


def fake_data():
    db = firestore.client()
    doc_ref = db.collection("users").document("manummasson8")
    doc_ref.delete()
    doc_ref.set({})
    for month in range(1, 13):
        fireBatch = db.batch()
        for day in range(1, 29):
            if day % 2 == 0:  # make it more common to do nothing
                x = randint(0, 3)
                obj = []
                for amount in range(0, x):  # some days add multiple tasks, some days have 0 tasks.
                    obj.append({
                        'title': "Physics",
                        'desc': "Circular Motion " + str(amount),
                        'date': "2019-" + str(month) + "-" + str(day),
                    })
                if obj:
                    fireBatch.update(doc_ref, {
                        str(month): ArrayUnion(obj)
                    })
            if day % 3 == 0:  # make it more common to do nothing
                x = randint(0, 3)
                obj = []
                for amount in range(0, x):  # some days add multiple tasks, some days have 0 tasks.
                    obj.append({
                        'title': "Economics",
                        'desc': "Circular Motion " + str(amount),
                        'date': "2019-" + str(month) + "-" + str(day),
                    })
                if obj:
                    fireBatch.update(doc_ref, {
                        str(month): ArrayUnion(obj)
                    })
        fireBatch.set(doc_ref, {
            'name': "manummasson8",
            'currMonth': "3",
            'tasks': True,
        }, merge=True)
        fireBatch.commit()  # in month loop since only 500 requests per batch allowed.


def addDaysToString(stringo, days):
    if days == 0:
        print("error oh oh we have an error")

    if days >= 0:
        strr = (datetime.datetime.strptime(stringo, "%Y-%m-%d") + datetime.timedelta(days=days)).strftime('%Y-%m-%d')
    else:
        strr = (datetime.datetime.strptime(stringo, "%Y-%m-%d") - datetime.timedelta(days=-days)).strftime('%Y-%m-%d')
    # print("new" + stringo, strr)
    return strr


def days_in_month(month):
    days = 31
    # python doesnt have case where, so i use a record with keys indicating month
    irregular = {
        2: 28,
        4: 30,
        6: 30,
        9: 30,
        11: 30
    }
    return irregular[month] if month in irregular else days


def getMYD(date, myd):
    if myd == "day":
        n = 2
    elif myd == "month":
        n = 1
    elif myd == "year":
        n = 0

    if type(date) == int:
        return date

    else:
        return int(date.split("-")[n])


def fill(start, end, arr):  # start and end dates, array to push to. start and end can be either date strings or ints
    if getMYD(end, "year") < 2100:
        for i in range(getMYD(start, "day") + 1, getMYD(end, "day")):  # not inclusive
            arr.append(0)

    return arr


def sortEntries(entries):
    entries.sort(key=lambda x: datetime.datetime.strptime(x['date'], '%Y-%m-%d'))
    return entries


def entries_to_array(entry):
    # print("Input:", entries[0])
    entry = sortEntries(entry)
    entries = deepcopy(entry)
    arr = fill(0, entries[0]["date"], [])  # may have edge errors // should be 0 not one
    prevDate = entries[0]["date"]
    amount = 1

    length = len(entries)
    sentinel = entries[length - 1]
    sentinel["date"] = addDaysToString(sentinel["date"], 1)
    sentinel["desc"] = "sentinel"  # for debugging

    # print(sentinel)
    entries.append(sentinel)
    length += 1

    for count in range(1, length):

        if entries[count]["date"] == prevDate:
            amount += 1
        else:
            arr.append(amount)
            amount = 1

        arr = fill(getMYD(prevDate, "day"), getMYD(entries[count]["date"], "day"),
                   arr)  # inclusive therefore 9-->10 wont fill

        prevDate = entries[count]["date"]

    arr = fill(getMYD(entries[length - 2]["date"], "day"), 35,
               arr)
    print("done TO_ARRAY funco", arr, len(arr))  # ^^

    return arr


if __name__ == "__main__":
    cred = credentials.Certificate("key.json")
    firebase_admin.initialize_app(cred)


    def unitTest():
        # data = doc_ref.get().to_dict()
        # x = entries_to_array(data["3"])
        # print(x, len(x))/
        fake_data()
        # space_out()


    unitTest()
