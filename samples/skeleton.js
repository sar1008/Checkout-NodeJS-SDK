'use strict';
const braintreehttp = require('braintreehttp');
const checkoutNodeJssdk = require('../lib/lib');
const paypalAuthToken = require('./paypalAuthToken');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
class TestEnvironment extends braintreehttp.Environment {
  constructor() {
    super(process.env.BASE_URL);
  }
}

function client() {
    return new checkoutNodeJssdk.core.CheckoutNodeJssdkHttpClient(new TestEnvironment());
}

function authentication(){
  let request = new paypalAuthToken.PaypalAuthToken('AVNCVvV9oQ7qee5O8OW4LSngEeU1dI7lJAGCk91E_bjrXF2LXB2TK2ICXQuGtpcYSqs4mz1BMNQWuso1',
        'EDQzd81k-1z2thZw6typSPOTEjxC_QbJh6IithFQuXdRFc7BjVht5rQapPiTaFt5RC-HCa1ir6mi-H5l');
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("POST", "https://api.sandbox.paypal.com/v1/oauth2/token", false);
  xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xmlHttp.setRequestHeader("Authorization", request.headers.Authorization);
  xmlHttp.send("grant_type=client_credentials");

  return JSON.parse(xmlHttp.responseText).access_token;
}

module.exports = {client: client, authentication:authentication};
