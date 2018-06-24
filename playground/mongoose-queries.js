const { ObjectID } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo'); 

const id = '6b2c133f0950c19453c54d65';


if (!ObjectID.isValid(id)) {
  console.log('Id not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
})

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then(todo => {
  if (!todo) {
    console.log('Id not found');
    
  }
  console.log('Todo By Id', todo);
});