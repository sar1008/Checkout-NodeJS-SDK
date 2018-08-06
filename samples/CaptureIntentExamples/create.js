'use strict';

const client = require('../skeleton').client;
const authToken = require('../skeleton').authentication;
const prettyPrint = require('../skeleton').prettyPrint;
const checkoutNodeJssdk = require('../../lib/lib');

function buildRequestBody() {
    return {
        "intent": "CAPTURE",
        "purchase_units": [
            {
                "amount": {
                    "currency_code": "USD",
                    "value": "100.00"
                }
            }
        ]
    };
}

async function createOrder(debug=false) {
    try {
        const request = new checkoutNodeJssdk.orders.OrdersCreateRequest();
        request.authToken("Bearer " + await authToken());
        request.prefer("return=representation");
        request.requestBody(buildRequestBody());

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
    (async() => await createOrder(true))();
}

module.exports = {createOrder:createOrder};



