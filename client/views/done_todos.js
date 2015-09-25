Template.doneTodos.events({
  'click #mark-undone': function (event, template) {
    Todos.update({ _id: this._id }, { $set: { isDone: false } });
  },

  'click #remove': function (event, template) {
    Todos.remove({ _id: this._id });
  }
});

Template.doneTodos.helpers({
  todos: () => {
    return Todos.find({ isDone: true }, { sort: { createdAt: 1 } });
  }
});
