'use strict';

const client = require('../skeleton').client;
const authToken = require('../skeleton').authentication;
const prettyPrint = require('../skeleton').prettyPrint;
const checkoutNodeJssdk = require('../../lib/lib');

async function captureOrder(orderId, debug=false) {
    try {
        const request = new checkoutNodeJssdk.orders.OrdersCaptureRequest(orderId);
        request.authToken("Bearer " + await authToken());
        request.requestBody({});
        const response = await client().execute(request);
        if (debug){
            console.log("Status Code: " + response.statusCode);
            console.log(await prettyPrint(response.result));
        }
        return response;
    }
    catch (e) {
        console.log(e)
    }
}

if (require.main === module){
    (async() => await captureOrder('3L848818A2897925Y', true))();
}
module.exports = {captureOrder:captureOrder};