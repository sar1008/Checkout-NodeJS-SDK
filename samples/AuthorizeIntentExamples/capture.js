'use strict';

const client = require('../skeleton').client;
const authToken = require('../skeleton').authentication;
const prettyPrint = require('../skeleton').prettyPrint;
const checkoutNodeJssdk = require('../../lib/lib');

async function captureOrder(authId, debug=false) {
    try {
        const request = new checkoutNodeJssdk.payments.AuthorizationsCaptureRequest(authId);
        request.authToken("Bearer " + await authToken());
        request.requestBody({});
        const response = await client().execute(request);
        if (debug){
            console.log("Status Code: " + response.statusCode);
            await prettyPrint(response.result);
            // console.log("Status: " + response.result.status);
            // console.log("Order ID: " + response.result.id);
            // console.log("Links:");
            // response.result.links.forEach((item, index) => {
            //     let rel = item.rel;
            //     let href = item.href;
            //     let method = item.method;
            //     let message = `\t${rel}: ${href}\tCall Type: ${method}`;
            //     console.log(message);
            // });

        }
        return response;
    }
    catch (e) {
        console.log(e)
    }
}

if (require.main === module){
    (async() => await captureOrder('', true))();
}
module.exports = {captureOrder:captureOrder};