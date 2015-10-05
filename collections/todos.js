Todos = new Mongo.Collection('todos');

Todos.allow({
  insert: (userId, document) => {
    if (document.body.length !== 0) {
      return true;
    }
  },

  update: (userId, document, fieldNames, modifier) => {
    return true;
  },

  remove: (userId, document) => {
    return true;
  }
});
