'use strict';

const chai = require('chai');
const client = require('../../samples/skeleton').client();
const paymentNodeJssdk = require('../../lib/lib');


function buildRequestBody() {
  return JSON.parse('{"amount":{"currency_code":"DtiLt20aHqPYVbBMTg","value":"SN0GWZ8SYRRGbaHV11c"}}');
}

describe('AuthorizationsReauthorizeRequest', function () {
  it('works as expected', function () {
    let request = new paymentNodeJssdk.payments.AuthorizationsReauthorizeRequest('U95JYXxHwIBU');
    request.payPalRequestId('xLG5pe3b7V');
    request.prefer('CgNrbrayEMPd');
    request.requestBody(buildRequestBody());

    return client.execute(request).then((r) => {
      chai.assert.equal(r.statusCode, 201);
      chai.assert.isNotNull(r.result);

      // Add your own checks here
    });
  });
});
