'use strict';

const chai = require('chai');
const client = require('../skeleton').client();
const checkoutNodeJssdk = require('../../lib/lib');




describe('OrdersGetRequest', function () {
  it('works as expected', function () {
    let request = new checkoutNodeJssdk.orders.OrdersGetRequest('UEtP8Bfr2rDAZ');

    return client.execute(request).then((r) => {
      chai.assert.equal(r.statusCode, 200);
      chai.assert.isNotNull(r.result);

      // Add your own checks here
    });
  });
});
