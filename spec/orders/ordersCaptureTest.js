'use strict';

const chai = require('chai');
const client = require('../../samples/skeleton').client();
const checkoutNodeJssdk = require('../../lib/lib');


function buildRequestBody() {
  return JSON.parse('{"payment_source":{"card":{"billing_address":{"address_details":{"building_name":"ZqYbpUBs3S tLBvX","delivery_service":"sYPRBBra7ix2XuGYpx","street_name":"6GtXOMdvSZPfeHeO","street_number":"RzxNsziC7xCt526DyX","street_type":"04ecA2xsput88812","sub_building":"qihsD9OsFS3K0dNTRBE"},"address_line_1":"2 HHxMeT6q","address_line_3":"AKxOiXihtpP5Sz","admin_area_1":"5986 V3eF3h5xCJ","admin_area_3":"ZR4z1pz7RzWUSq","admin_area_4":"96e7zeYxdtU","country_code":"9Qz8Zg8O ZXwSgIg","address_line_2":"QgefEOvEJKV","admin_area_2":"0LvsWs5wV8ADfuGtUyr","postal_code":"ULB3i1U33aKqFMLMLRV"},"card_type":"J8He2tcVrS0bdyVK","expiry":"AXJWW4QGE5pwPcwdB5W","id":"SMgbHQq04xZUrYL","last_digits":"MDTAMUzRDefeswI6GhQ","name":"qiteyfY4brKp2MD","number":"whSThaqG3iFR7rutyG","security_code":"6GcOQyqT7R0Afc"},"token":{"id":"IGM WMDDdz9bMw","type":"BBT361OisFe1KvHRt"}}}');
}

describe('OrdersCaptureRequest', function () {
  it('works as expected', function () {
    let request = new checkoutNodeJssdk.orders.OrdersCaptureRequest('xGegMtGCBDbDTZTsP8G');
    request.payPalClientMetadataId('55WOa Bg PUWyH8');
    request.payPalRequestId('7y5bguV8r8fEAcQc4vS');
    request.prefer('H7USgTXcHeIM2GeOwxv');
    request.requestBody(buildRequestBody());

    return client.execute(request).then((r) => {
      chai.assert.equal(r.statusCode, 201);
      chai.assert.isNotNull(r.result);

      // Add your own checks here
    });
  });
});
