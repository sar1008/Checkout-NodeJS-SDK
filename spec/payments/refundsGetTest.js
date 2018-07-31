'use strict';

const chai = require('chai');
const client = require('../skeleton').client();
const paymentNodeJssdk = require('../../lib/lib');




describe('RefundsGetRequest', function () {
  it('works as expected', function () {
    let request = new paymentNodeJssdk.payments.RefundsGetRequest('a4SrI6D28CJUWz O0');

    return client.execute(request).then((r) => {
      chai.assert.equal(r.statusCode, 200);
      chai.assert.isNotNull(r.result);

      // Add your own checks here
    });
  });
});
