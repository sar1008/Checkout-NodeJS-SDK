'use strict';

const chai = require('chai');
const client = require('../skeleton').client();
const checkoutNodeJssdk = require('../../lib/lib');


function buildRequestBody() {
  return JSON.parse('{"payment_source":{"card":{"expiry":"bXs89eaWRf","id":"0Pxcs5sDIVxTgK","last_digits":"HNJ32Tgyy1QH","name":"di1ud5cDwHDbL3vaCSs","number":"pQLGPU9Nf rxU4rCtUH","security_code":"YLuUecEciPv","billing_address":{"admin_area_3":"7ONDU3vNPMCRfb2","admin_area_4":"tZRKr2JItXR2p","postal_code":"d1J75Efxd0W Srt","address_line_2":"9sN4NCibYHFaFXU","address_line_1":"sNu1q8gO2VvAI83A","address_line_3":"SrvAhc0Hyi9M7gfR","admin_area_1":"z73ALpS6NqpM","admin_area_2":" eGVFcgKVyyKTpG8P4X","country_code":"XZDvHsKVhSuVFGD","address_details":{"building_name":"VSbh3NC Ghxu","delivery_service":"FB 4JBu8Y2c","street_name":"yyO8ayGfHvUC5Wx","street_number":"fVdvtBaeA5 SrbaXes","street_type":"qeMG9EK7Uff","sub_building":"60pX5YzVdcQ9Eg3B9Z5"}},"card_type":"Zx3Uw0QyAsaZuYOa"},"token":{"type":"EeEQIAevEyq 8sBD","id":"UgIzsbFihRL9hcPdG"}}}');
}

describe('OrdersAuthorizeRequest', function () {
  it('works as expected', function () {
    let request = new checkoutNodeJssdk.orders.OrdersAuthorizeRequest('9zOFr36yHHJOO');
    request.payPalClientMetadataId('66ieCFy5UXIGO6aJQI');
    request.payPalRequestId('6B239X902YR');
    request.prefer('tIiZsuMXG5YGCCTO');
    request.requestBody(buildRequestBody());

    return client.execute(request).then((r) => {
      chai.assert.equal(r.statusCode, 201);
      chai.assert.isNotNull(r.result);

      // Add your own checks here
    });
  });
});
