'use strict';

const client = require('../skeleton').client();
const authToken = require('../skeleton').authentication();
const checkoutNodeJssdk = require('../../lib/lib');

async function authorizeOrder(orderId, debug=false) {
    try {
        const request = new checkoutNodeJssdk.orders.OrdersAuthorizeRequest(orderId);
        request.authToken("Bearer " + authToken);
        request.requestBody({});
        const response = await client.execute(request);
        if (debug){
            console.log("Status Code: " + response.statusCode);
            console.log("Status: " + response.result.status);
            console.log('Authorization ID: ', response.result.purchase_units[0].payments.authorizations[0].id);
            console.log("Order ID: " + response.result.id);
            console.log("Links: ");
            response.result.links.forEach((item, index) => {
                let rel = item.rel;
                let href = item.href;
                let method = item.method;
                let message = `\t${rel}: ${href}\tCall Type: ${method}`;
                console.log(message);
            });
            console.log("Authorization Links:");
            response.result.purchase_units[0].payments.authorizations[0].links.forEach((item, index) => {
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

// let orderid = "1LP03074HH5915205";
// (async () => {
//     await authorizeOrder(orderid, true);
// })();
module.exports = {authorizeOrder:authorizeOrder};