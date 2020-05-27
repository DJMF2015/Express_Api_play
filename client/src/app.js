const Consumables = require('./models/consumables.js');
const ListView = require('./views/list_view');
const FormView = require('./views/form_view');

document.addEventListener('DOMContentLoaded', () => {

  const formElement = document.querySelector('form#consumable-form');
  const formView = new FormView(formElement);
  formView.bindEvents();

  const biscuitsListElement = document.querySelector('ul#stocks-list');
  const biscuitsListView = new ListView('financials', biscuitsListElement);
  biscuitsListView.bindEvents();

  const apiUrl = 'http://localhost:3000/api';

  const biscuits = new Consumables('financials', `${apiUrl}/financials`);
  biscuits.bindEvents();
  biscuits.getData();

});
