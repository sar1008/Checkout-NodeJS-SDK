'use strict';

const chai = require('chai');
const client = require('../skeleton').client();
const paymentNodeJssdk = require('../../lib/lib');


function buildRequestBody() {
  return JSON.parse('{"invoice_id":"quRDFrpJ4TzF3p","note_to_payer":"wtUixiSwGv7SIgr","amount":{"currency_code":"5u6dwCTq hvHS1S","value":"qYv5p5Ohb1"}}');
}

describe('CapturesRefundRequest', function () {
  it('works as expected', function () {
    let request = new paymentNodeJssdk.payments.CapturesRefundRequest('xbGBbFO02x8faThW');
    request.payPalRequestId('vS38MfWQOt');
    request.prefer('9E3Lw vatgeeND7H');
    request.requestBody(buildRequestBody());

    return client.execute(request).then((r) => {
      chai.assert.equal(r.statusCode, 201);
      chai.assert.isNotNull(r.result);

      // Add your own checks here
    });
  });
});
