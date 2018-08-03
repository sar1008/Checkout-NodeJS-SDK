'use strict';

const braintreehttp = require('braintreehttp');

class CheckoutNodeJssdkEnvironment extends braintreehttp.Environment {
  constructor(baseUrl) {
    super(baseUrl)
  }
}

module.exports = { CheckoutNodeJssdkEnvironment: CheckoutNodeJssdkEnvironment };
