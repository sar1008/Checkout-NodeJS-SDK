'use strict';

const paypal = require('../lib/lib').core;

function client() {
  return new paypal.PayPalHttpClient(environment());
}

function environment() {
  let clientId = process.env.PAYPAL_CLIENT_ID || 'AVNCVvV9oQ7qee5O8OW4LSngEeU1dI7lJAGCk91E_bjrXF2LXB2TK2ICXQuGtpcYSqs4mz1BMNQWuso1';
  let clientSecret = process.env.PAYPAL_CLIENT_SECRET || 'EDQzd81k-1z2thZw6typSPOTEjxC_QbJh6IithFQuXdRFc7BjVht5rQapPiTaFt5RC-HCa1ir6mi-H5l';

  return new paypal.SandboxEnvironment(
    clientId, clientSecret
  );
}

module.exports = {
    client: client,
    environment: environment
};
