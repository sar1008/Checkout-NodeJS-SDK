'use strict';

const client = require('../skeleton').client();
const authToken = require('../skeleton').authentication();
const checkoutNodeJssdk = require('../../lib/lib');

async function captureOrder(orderId, debug=false) {
    try {
        const request = new checkoutNodeJssdk.orders.OrdersCaptureRequest(orderId);
        request.authToken("Bearer " + authToken);
        request.requestBody({});
        const response = await client.execute(request);
        if (debug){
            console.log("Status Code: " + response.statusCode);
            console.log("Status: " + response.result.status);
            console.log("Order ID: " + response.result.id);
            console.log("Links: ");
            response.result.links.forEach((item, index) => {
                let rel = item.rel;
                let href = item.href;
                let method = item.method;
                let message = `\t${rel}: ${href}\tCall Type: ${method}`;
                console.log(message);
            });
        }
        return response;
    }
    catch (e) {
        console.log(e)
    }
}

// let orderid = "1RE56036014563228";
// (async () => {
//     await capture(orderid, true);
// })();
module.exports = {captureOrder:captureOrder};