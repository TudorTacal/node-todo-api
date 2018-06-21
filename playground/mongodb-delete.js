const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').deleteMany({
    name: 'Tudor',
  }).then(result => {
    console.log(result);
  })

  db.collection('Todos').deleteOne({ text: 'Eat lunch' })
    .then(result => {
      console.log(result);
    })

  db.collection('Users').findOneAndDelete({ _id: new ObjectID('5b296117f4fd328ebd0c55ab') })
  .then(result => {
    console.log(result);
  })

  db.close();
});

