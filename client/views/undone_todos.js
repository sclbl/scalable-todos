Template.undoneTodos.events({
  'click #mark-as-done': function (event, template) {
    Todos.update({ _id: this._id }, { $set: { isDone: true } });
  },

  'click #remove': function (event, template) {
    Todos.remove({ _id: this._id });
  }
});

Template.undoneTodos.helpers({
  todos: () => {
    return Todos.find({ isDone: false }, { sort: { createdAt: 1 } });
  }
});
