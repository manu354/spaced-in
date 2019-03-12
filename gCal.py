def eventSchema(title, desc, dateCreated, TIMEZONE):
    event = {
        'summary': title + ": " + desc,
        'description': desc,
        'start': {
            'dateTime': dateCreated,
            'timeZone': TIMEZONE
        },
        'end': {
            'dateTime': dateCreated,
            'timeZone': TIMEZONE
        },
        'reminders': {
            'useDefault': False,
            'overrides': [
                {'method': 'email', 'minutes': 24 * 60},
                {'method': 'popup', 'minutes': 10},
            ],
        },
    }
    return event





spacings = [3, 10, 30, 60, 180]
