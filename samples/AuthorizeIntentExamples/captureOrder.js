'use strict';

const client = require('../skeleton').client;
const authToken = require('../skeleton').authentication;
const checkoutNodeJssdk = require('../../lib/lib');

async function captureOrder(authId, debug=false) {
    try {
        const request = new checkoutNodeJssdk.payments.AuthorizationsCaptureRequest(authId);
        request.requestBody({});
        const response = await client().execute(request);
        if (debug){
            console.log("Status Code: " + response.statusCode);
            console.log("Status: " + response.result.status);
            console.log("Order ID: " + response.result.id);
            console.log("Links:");
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

if (require.main === module){
    // Replace authorization id from authorizeOrder here to see it work
    (async() => await captureOrder('AUTHORIZATION-ID', true))();
}
module.exports = {captureOrder:captureOrder};