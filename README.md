# REST API SDK for NodeJS V2

![Home Image](homepage.jpg)

__Welcome to PayPal NodeJS SDK__. This repository contains PayPal's NodeJS SDK and samples for REST API.

This is a part of the next major PayPal SDK. It includes a simplified interface to only provide simple model objects and blueprints for HTTP calls. This repo currently contains functionality for PayPal Checkout APIs which includes Orders V2 and Payments V2.

## Please Note
> **The Payment Card Industry (PCI) Council has [mandated](http://blog.pcisecuritystandards.org/migrating-from-ssl-and-early-tls) that early versions of TLS be retired from service.  All organizations that handle credit card information are required to comply with this standard. As part of this obligation, PayPal is updating its services to require TLS 1.2 for all HTTPS connections. At this time, PayPal will also require HTTP/1.1 for all connections. [Click here](https://github.com/paypal/tls-update) for more information. Connections to the sandbox environment use only TLS 1.2.**

## Direct Credit Card Support
> **Important: The PayPal REST API no longer supports new direct credit card integrations.**  Please instead consider [Braintree Direct](https://www.braintreepayments.com/products/braintree-direct); which is, PayPal's preferred integration solution for accepting direct credit card payments in your mobile app or website. Braintree, a PayPal service, is the easiest way to accept credit cards, PayPal, and many other payment methods.

## Examples
### Creating an Order
#### Code to Execute:
```javascript
const paypal = require('checkoutNodeJssdk');

// Creating an environment
let environment = new paypal.core.CheckoutNodeJssdkEnvironment(process.env.BASE_URL);
let client = new paypal.core.CheckoutNodeJssdkHttpClient(environment);

// Creating Access Token for Sandbox
clientId = "AVNCVvV9oQ7qee5O8OW4LSngEeU1dI7lJAGCk91E_bjrXF2LXB2TK2ICXQuGtpcYSqs4mz1BMNQWuso1";
clientSecret = "EDQzd81k-1z2thZw6typSPOTEjxC_QbJh6IithFQuXdRFc7BjVht5rQapPiTaFt5RC-HCa1ir6mi-H5l";
let request = new paypalAuthenticationToken.PaypalAuthenticationToken(clientId,clientSecret);
let response = await client().execute(request);
let authToken = response.access_token;

// Construct a request object and set desired parameters
// Here, OrdersCreateRequest() creates a POST request to /v2/checkout/orders
let request = new paypal.orders.OrdersCreateRequest();
request.authToken('Bearer ' + authToken);
request.request_body({
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
    console.log(prettyPrint(order));
}
catch(error){
    console.error(error.statusCode);
    console.error(error.message);
}
```
#### Example Output:
```
Status Code: 201
Id: 8GB67279RC051624C
Intent: CAPTURE
Gross_amount:
	Currency_code: USD
	Value: 100.00
Purchase_units:
	1:
		Amount:
			Currency_code: USD
			Value: 100.00
Create_time: 2018-08-06T23:34:31Z
Links:
	1:
		Href: https://api.sandbox.paypal.com/v2/checkout/orders/8GB67279RC051624C
		Rel: self
		Method: GET
	2:
		Href: https://www.sandbox.paypal.com/checkoutnow?token=8GB67279RC051624C
		Rel: approve
		Method: GET
	3:
		Href: https://api.sandbox.paypal.com/v2/checkout/orders/8GB67279RC051624C/capture
		Rel: capture
		Method: POST
Status: CREATED
```

## Capturing an Order

### Code to Execute:
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
    console.log(prettyPrint(order));
}
catch(error){
    console.error(error.statusCode);
    console.error(error.message);
}
```

#### Example Output:
```
Status Code: 201
Id: 8GB67279RC051624C
Create_time: 2018-08-06T23:39:11Z
Update_time: 2018-08-06T23:39:11Z
Payer:
	Name:
		Given_name: test
		Surname: buyer
	Email_address: ganeshramc-buyer@live.com
	Payer_id: KWADC7LXRRWCE
	Phone:
		Phone_number:
			National_number: 408-411-2134
	Address:
		Country_code: US
Links:
	1:
		Href: https://api.sandbox.paypal.com/v2/checkout/orders/3L848818A2897925Y
		Rel: self
		Method: GET
Status: COMPLETED
```

## Running tests

To run integration tests using your client id and secret, clone this repository and run the following command:
```sh
$ npm install
$ npm test
```

*NOTE*: This SDK is still in beta, is subject to change, and should not be used in production.

## Samples

You can start off by trying out [creating and capturing an order](/samples/CaptureIntentExamples/runAll.js)

To try out different samples for both create and authorize intent check [this link](/samples)

## Note

BraintreeHttpClient used as part of this project returns Promises

You can read more about Promises here: https://www.promisejs.org/


