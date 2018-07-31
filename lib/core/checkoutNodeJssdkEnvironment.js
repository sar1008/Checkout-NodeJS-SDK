'use strict';

const braintreehttp = require('braintreehttp');

class CheckoutNodeJssdkEnvironment extends braintreehttp.Environment {
  constructor() {
    // super(YOUR_API_BASE_URL)
    throw new Error("Not implemented");
  }
}

module.exports = { CheckoutNodeJssdkEnvironment: CheckoutNodeJssdkEnvironment };
