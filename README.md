# Checkout-NodeJS-SDK

# PayPal SDK V2

This is a part of the next major PayPal SDK. It includes a simplified interface to only provide simple model objects and blueprints for HTTP calls. This repo currently contains functionality for PayPal Checkout APIs which includes Orders V2 and Payments V2.

## Creating an Order

```javascript
const paypal = require('checkoutNodeJssdk');

// Creating an environment
let environment = new paypal.core.CheckoutNodeJssdkEnvironment(process.env.BASE_URL);
let client = new paypal.core.CheckoutNodeJssdkHttpClient(environment);

// Creating Access Token for Sandbox
clientId = "AVNCVvV9oQ7qee5O8OW4LSngEeU1dI7lJAGCk91E_bjrXF2LXB2TK2ICXQuGtpcYSqs4mz1BMNQWuso1";
clientSecret = "EDQzd81k-1z2thZw6typSPOTEjxC_QbJh6IithFQuXdRFc7BjVht5rQapPiTaFt5RC-HCa1ir6mi-H5l";
let request = new paypalAuthToken.PaypalAuthToken(clientId,clientSecret);
let response = await client().execute(request);
let authToken = response.access_token;

// Construct a request object and set desired parameters
// Here, OrdersCreateRequest() creates a POST request to /v2/checkout/orders
let request = new paypal.orders.OrdersCreateRequest();
request.authToken('Bearer ' + authToken);
request.request_body ({
                          "intent": "CAPTURE",
                          "purchase_units": [
                              {
                                  "amount": {
                                      "currency_code": "USD",
                                      "value": "100.00"
                                  }
                              }
                           ]
                        });

try {
    // Call API with your client and get a response for your call
    let response = client.execute(request);  
    
    // If call returns body in response, you can get the deserialized version from the result attribute of the response
    let order = response.result;
}
catch(error){
    console.error(error.statusCode);
    console.error(error.message);
}
```


## Capturing an Order

```javascript
// Here, OrdersCaptureRequest() creates a POST request to /v2/checkout/orders
// order.id gives the orderId of the order created above
request = new paypal.orders.OrdersCaptureRequest(order.id);
request.authToken('Bearer ' + authToken);
request.requestBody({});

try {
    // Call API with your client and get a response for your call
    response = client.execute(request);  
    
    // If call returns body in response, you can get the deserialized version from the result attribute of the response
    order = response.result;
}
catch(error){
    console.error(error.statusCode);
    console.error(error.message);
}
```
## Samples

You can start off by trying out [creating and capturing an order](/samples/CaptureIntentExamples/runAll.js)

To try out different samples for both create and authorize intent check [this link](/samples)

## Note

Http Client used as part of this project returns Promises

You can read more about Promises here: https://www.promisejs.org/


