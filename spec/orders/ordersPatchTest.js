'use strict';

const chai = require('chai');
const client = require('../skeleton').client();
const checkoutNodeJssdk = require('../../lib/lib');


function buildRequestBody() {
  return JSON.parse('{"from":"L9tsSvML AefyS","op":"XqttbgIuSU2R","path":"NAKXLypVdWVC","value":{}}');
}

describe('OrdersPatchRequest', function () {
  it('works as expected', function () {
    let request = new checkoutNodeJssdk.orders.OrdersPatchRequest('YCYa5KrUa78');
    request.requestBody(buildRequestBody());

    return client.execute(request).then((r) => {
      chai.assert.equal(r.statusCode, 204);

      // Add your own checks here
    });
  });
});
