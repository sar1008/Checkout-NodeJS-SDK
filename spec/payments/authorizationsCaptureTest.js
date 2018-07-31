'use strict';

const client = require('../../samples/skeleton').client();
const paymentNodeJssdk = require('../../lib/lib');


function buildRequestBody() {
  return JSON.parse('{"amount":{"currency_code":" ibVdf02iuFbtKV","value":"xiTYP6D1A57"},"final_capture":true,"invoice_id":"xYpTyspGUHH","payment_instruction":{"platform_fees":{"amount":{"currency_code":"MB3Ur9yV2p9Z","value":"4RXh7HLGU1LgtWWY"},"payee":{"merchant_id":"qRqKNT0XtSQ","email_address":"rQg6iJy44JXAgxPhsGs"}},"disbursement_mode":"EsJOEtqyI7zPS"}}');
}

describe('AuthorizationsCaptureRequest', function () {
  it('works as expected', function () {
    let request = new paymentNodeJssdk.payments.AuthorizationsCaptureRequest('V8GzBSfr4SabyuXU0D');
    request.payPalRequestId('4hcZ2hUqO08A');
    request.prefer('GbGHZMRvfESCUSb');
    request.requestBody(buildRequestBody());

    return client.execute(request).then((r) => {
      // chai.assert.equal(r.statusCode, 201);
      // chai.assert.isNotNull(r.result);

      // Add your own checks here
    });
  });
});
