Template.todos.events({
  'click [data-action=done]': function (event, template) {
    Todos.update({ _id: this._id }, { $set: { isDone: true } });
  },

  'click [data-action=not-done]': function (event, template) {
    Todos.update({ _id: this._id }, { $set: { isDone: false } });
  },

  'click [data-action=remove]': function (event, template) {
    Todos.remove({ _id: this._id });
  }
});

Template.todos.helpers({
  undoneTodos: () => {
    return Todos.find({ isDone: false }, { sort: { createdAt: 1 } });
  },

  doneTodos: () => {
    return Todos.find({ isDone: true }, { sort: { createdAt: 1 } });
  },

  todosAvailable: () => {
    return Todos.find().count();
  }
});
