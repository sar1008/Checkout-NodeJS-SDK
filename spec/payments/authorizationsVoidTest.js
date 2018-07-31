'use strict';

const chai = require('chai');
const client = require('../../samples/skeleton').client();
const paymentNodeJssdk = require('../../lib/lib');




describe('AuthorizationsVoidRequest', function () {
  it('works as expected', function () {
    let request = new paymentNodeJssdk.payments.AuthorizationsVoidRequest('ObL1AIrBcbQD');

    return client.execute(request).then((r) => {
      chai.assert.equal(r.statusCode, 204);

      // Add your own checks here
    });
  });
});
