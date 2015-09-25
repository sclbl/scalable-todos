Template.form.events({
  'submit form': function (event, template) {
    event.preventDefault();

    const body = template.find('#body').value;

    if (body.length !== 0) {
      Todos.insert({ body: template.find('#body').value, createdAt: new Date(), isDone: false });
      template.find('#body').value = '';
    }
  }
});
