var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completedAt: {
    type: Number,
    default: null
  }
});

const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  }
})
const newTodo = new Todo({
  text: true,
});

newTodo.save().then((doc) => {
  console.log('Saved todo', doc);
  
}, (e) => {
  console.log('Unable to save todo', e);
});

const newUser = new User({
  email: 'tudor@email.com'
})

newUser.save().then(doc => {
  console.log('Saved user', doc);
}, (e) => {
  console.log('Unable to save user', e);
});