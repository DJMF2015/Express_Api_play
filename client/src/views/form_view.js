const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');

const FormView = function (formElement) {
  this.formElement = formElement;
};

FormView.prototype.bindEvents = function () {
  this.formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = this.createData(event.target);
    const category = event.target.category.value;//event.target.elements[0].value;
    PubSub.publish(`FormView:submit-${category}`, data);
    event.target.reset();
  });
};

FormView.prototype.createData = function (form) {

  return {
    ticker: form.ticker.value,
    price: form.price.value,
    changes: "",
    changesPercentage: "",
    companyName: ""
  };
};

module.exports = FormView;
