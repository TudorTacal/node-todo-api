const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   test: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });  

  // db.collection('Users').insertOne({
  //   name: 'Tudor',
  //   age: 29,
  //   location: 'London'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert User');
  //   }

  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // })

  db.close();
});

