const client = require('./skeleton').client;
const authToken = require('./skeleton').authentication;
const checkoutNodeJssdk = require('../lib/lib');
const prettyPrint = require('./skeleton').prettyPrint;
/**
 * Body has no required parameters (intent, purchase_units)
 */
async function createError1(){
    try {
        const request = new checkoutNodeJssdk.orders.OrdersCreateRequest();
        request.authToken("Bearer " + await authToken());
        request.prefer("return=representation");
        request.requestBody({});
        console.log(`Request Body:\n${JSON.stringify(request.body, null, 4)}`);
        console.log("Response:");
        const response = await client().execute(request);
    }
    catch (e) {
        let message = JSON.parse(e.message);
        console.log(await prettyPrint(message));
    }
}

/**
 * Authorization header has an empty string
 */
async function createError2(){
    try {
        const request = new checkoutNodeJssdk.orders.OrdersCreateRequest();
        request.authToken("");
        request.prefer("return=representation");
        request.requestBody({"intent": "CAPTURE","purchase_units": [{"amount": {"currency_code": "USD","value": "100.00"}}]});
        console.log(`Request Body:\n${JSON.stringify(request.body, null, 4)}`);
        console.log("\nResponse:");
        const response = await client().execute(request);
    }
    catch (e) {
        let message = JSON.parse(e.message);
        console.log("Status Code:" , e.statusCode);
        console.log(await prettyPrint(message));
    }
}

async function createError3(){
    try {
        const request = new checkoutNodeJssdk.orders.OrdersCreateRequest();
        request.authToken("Bearer " + await authToken());
        request.prefer("return=representation");
        request.requestBody({"intent": "INVALID","purchase_units": [{"amount": {"currency_code": "USD","value": "100.00"}}]});
        console.log(`Request Body:\n${JSON.stringify(request.body, null, 4)}`);
        console.log("Response:");
        const response = await client().execute(request);
    }
    catch (e) {
        let message = JSON.parse(e.message);
        console.log("Status Code:" , e.statusCode);
        console.log(await prettyPrint(message));
    }
}

(async() => {
    console.log("Calling createError1 (Body has no required parameters (intent, purchase_units))");
    await createError1();
    console.log("\nCalling createError2 (Authorization header has an empty string)");
    await createError2();
    console.log("\nExecuting createError3 (Body has invalid parameter value for intent)");
    await createError3();
})();