'use strict';

const client = require('../skeleton').client;
const authToken = require('../skeleton').authentication;
const prettyPrint = require('../skeleton').prettyPrint;
const checkoutNodeJssdk = require('../../lib/lib');

async function authorizeOrder(orderId, debug=false) {
    try {
        const request = new checkoutNodeJssdk.orders.OrdersAuthorizeRequest(orderId);
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

module.exports = {authorizeOrder:authorizeOrder};