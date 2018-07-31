'use strict';

const chai = require('chai');
const client = require('../skeleton').client();
const checkoutNodeJssdk = require('../../lib/lib');


function buildRequestBody() {
  return JSON.parse('{"payment_source":{"card":{"card_type":"PGAtvQMBdTK9EE","expiry":"0DCHgYpfGHRaIwP8","id":"JS8eCcyK1z","last_digits":"Yzxp8egNe8","name":"pLyuTUT1AQBzuwYR2E ","number":"OYxivCaMbG","security_code":"qxyKPKwcdhUSNeacF5B","billing_address":{"address_line_1":"MRuIPF2 eLcMFpMVuCK","address_line_2":"BE0  NY3B9bhiCY0","admin_area_4":"P8wtQRLIEYxYQYGQY","address_details":{"street_type":"PJhBpGBVYvYeOucTaq","sub_building":"pII1HR3Vf6Z4hB","building_name":"12T4WPwH 3rTzHGCzA","delivery_service":"AaCvzHIIREG5a","street_name":"ORQqW8DaDGHaIYZcL2a","street_number":"aZdBEbELZH3eFsNxxg"},"address_line_3":"WgsNVRsgbYWw3DNT3w","admin_area_1":"vf0QHQOXiHVScztEhS","admin_area_2":"7wVYuXVXJgDO24VSRq","admin_area_3":"RVtgyUZTXPKpCN7 Hz4","country_code":"pM6si wtxr0","postal_code":"Oa7ZDc vQzp"}},"token":{"id":"CxYscD1XTGw6 U2hp","type":"hMOqzqXr8N"}}}');
}

describe('OrdersValidateRequest', function () {
  it('works as expected', function () {
    let request = new checkoutNodeJssdk.orders.OrdersValidateRequest('VdBWg8LceAZJXN8v6I6');
    request.payPalClientMetadataId('wEZPfxHrOy0');
    request.requestBody(buildRequestBody());

    return client.execute(request).then((r) => {
      chai.assert.equal(r.statusCode, 200);
      chai.assert.isNotNull(r.result);

      // Add your own checks here
    });
  });
});
