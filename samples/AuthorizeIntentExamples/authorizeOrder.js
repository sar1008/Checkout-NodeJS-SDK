'use strict';

const client = require('../skeleton').client;
const checkoutNodeJssdk = require('../../lib/lib');

async function authorizeOrder(orderId, debug=false) {
    try {
        const request = new checkoutNodeJssdk.orders.OrdersAuthorizeRequest(orderId);
        request.requestBody({});
        const response = await client().execute(request);
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
            // To print the whole body uncomment the below line
            // console.log(response.result);
        }
        return response;
    }
    catch (e) {
        console.log(e)
    }
}

if (require.main === module){
    // Replace order id (after approval) here to see it work
    (async() => await authorizeOrder('ORDER-ID', true))();
}

module.exports = {authorizeOrder:authorizeOrder};