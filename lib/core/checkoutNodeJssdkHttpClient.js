'use strict';

const braintreehttp = require('braintreehttp');

class CheckoutNodeJssdkHttpClient extends braintreehttp.HttpClient {

  constructor(environment) {
    super(environment);
  }

  getUserAgent() {
    return "CheckoutNodeJssdkHttpClient HttpClient";
  }
}

module.exports = {CheckoutNodeJssdkHttpClient: CheckoutNodeJssdkHttpClient};
