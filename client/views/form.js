Template.form.events({
  'submit form': function (event, template) {
    event.preventDefault();

    const body = template.find('#body').value;

    Todos.insert({ body: template.find('#body').value, createdAt: new Date(), isDone: false });
    template.find('#body').value = '';
  }
});
