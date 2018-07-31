'use strict';

const chai = require('chai');
const client = require('../skeleton').client();
const paymentNodeJssdk = require('../../lib/lib');




describe('CapturesGetRequest', function () {
  it('works as expected', function () {
    let request = new paymentNodeJssdk.payments.CapturesGetRequest('D6VSwFU7yF9SVu');

    return client.execute(request).then((r) => {
      chai.assert.equal(r.statusCode, 200);
      chai.assert.isNotNull(r.result);

      // Add your own checks here
    });
  });
});
