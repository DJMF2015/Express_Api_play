const Consumables = require('./models/consumables.js');
const ListView = require('./views/list_view');
const FormView = require('./views/form_view');

document.addEventListener('DOMContentLoaded', () => {

  const formElement = document.querySelector('form#consumable-form');
  const formView = new FormView(formElement);
  formView.bindEvents();

  const financialsListElement = document.querySelector('ul#stocks-list');
  const fiancialsListView = new ListView('financials', financialsListElement);
  fiancialsListView.bindEvents();

  const apiUrl = 'http://localhost:3000/api';

  const financials = new Consumables('financials', `${apiUrl}/financials`);
  financials.bindEvents();
  financials.getData();

});
