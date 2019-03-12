from pprint import pprint
def addToList(keep, note):
    gnotes = keep.find(func=lambda x: x.type._name_ == 'List' and x.title == note.title)
    list = next(gnotes, None)
    if not list:
        list = keep.createList(note.title, [(note.text, False)])
    else:
        list.add(note.text, False)

