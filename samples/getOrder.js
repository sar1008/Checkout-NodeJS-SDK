'use strict';

const client = require('./skeleton').client;
const checkoutNodeJssdk = require('../lib/lib');
const createOrder = require('./CaptureIntentExamples/createOrder').createOrder;
async function getOrder(orderId) {
    let request = new checkoutNodeJssdk.orders.OrdersGetRequest(orderId);
    let response = await client().execute(request);
    console.log("Status Code: " + response.statusCode);
    console.log("Status: " + response.result.status);
    console.log("Order ID: " + response.result.id);
    console.log("Intent: " + response.result.intent);
    console.log("Links: ");
    response.result.links.forEach((item, index) => {
        let rel = item.rel;
        let href = item.href;
        let method = item.method;
        let message = `\t${rel}: ${href}\tCall Type: ${method}`;
        console.log(message);
    });
    console.log(`Gross Amount: ${response.result.purchase_units[0].amount.currency_code} ${response.result.purchase_units[0].amount.value}`);
    // To print the whole response body uncomment below line
    // console.log(response.result);
}

if (require.main === module){

    (async() => {
        let response = await createOrder();
        await getOrder(response.result.id);
    })();
}

module.exports = {getOrder:getOrder};