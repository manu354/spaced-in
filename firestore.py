import firebase_admin
from firebase_admin import credentials, firestore
from google.cloud.firestore_v1beta1 import ArrayRemove, ArrayUnion

cred = credentials.Certificate("key.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

doc_ref = db.collection('users').document('massons').collection('tasks').document('physics')
doc_ref.set({
    'tasks' : True
}, merge = True)

doc_ref.update({'subTasks': ArrayUnion([{
        'date' : '23',
        'desc' : 'yoldso'
    }])})
doc_ref = db.collection('users').document('manummasson8')
doc = doc_ref.get()
print(u'Document data: {}'.format(doc.to_dict()))