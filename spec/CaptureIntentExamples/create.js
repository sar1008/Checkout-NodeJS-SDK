'use strict';

const client = require('../skeleton').client();
const authToken = require('../skeleton').authentication();
const checkoutNodeJssdk = require('../../lib/lib');

function buildRequestBody() {
    return {
        "intent": "CAPTURE",
        "application_context": {
            "return_url": "https://www.google.com",
            "cancel_url": "https://www.google.com",
            "brand_name": "EXAMPLE INC",
            "locale": "fr-FR",
            "landing_page": "BILLING",
            "shipping_preference": "SET_PROVIDED_ADDRESS",
            "user_action": "CONTINUE"
        },
        "purchase_units": [
            {
                "reference_id": "PUHF",
                "description": "Sporting Goods",

                "custom_id": "CUST-HighFashions",
                "soft_descriptor": "HighFashions",
                "amount": {
                    "currency_code": "USD",
                    "value": "230.00",
                    "breakdown": {
                        "item_total": {
                            "currency_code": "USD",
                            "value": "180.00"
                        },
                        "shipping": {
                            "currency_code": "USD",
                            "value": "20.00"
                        },
                        "handling": {
                            "currency_code": "USD",
                            "value": "10.00"
                        },
                        "tax_total": {
                            "currency_code": "USD",
                            "value": "20.00"
                        },
                        "gift_wrap": {
                            "currency_code": "USD",
                            "value": "10.00"
                        },
                        "shipping_discount": {
                            "currency_code": "USD",
                            "value": "10"
                        }
                    }
                },
                "payee": {
                    "email_address": "rpenmetsa-us@paypal.com"
                },
                "items": [
                    {
                        "name": "T-Shirt",
                        "description": "Green XL",
                        "sku": "sku01",
                        "unit_amount": {
                            "currency_code": "USD",
                            "value": "90.00"
                        },
                        "tax": {
                            "currency_code": "USD",
                            "value": "10.00"
                        },
                        "quantity": "1",
                        "category": "PHYSICAL_GOODS"
                    },
                    {
                        "name": "Shoes",
                        "description": "Running, Size 10.5",
                        "sku": "sku02",
                        "unit_amount": {
                            "currency_code": "USD",
                            "value": "45.00"
                        },
                        "tax": {
                            "currency_code": "USD",
                            "value": "5.00"
                        },
                        "quantity": "2",
                        "category": "PHYSICAL_GOODS"
                    }
                ],
                "shipping": {
                    "method": "United States Postal Service",
                    "address": {
                        "name": {
                            "give_name":"John",
                            "surname":"Doe"
                        },
                        "address_line_1": "123 Townsend St",
                        "address_line_2": "Floor 6",
                        "admin_area_2": "San Francisco",
                        "admin_area_1": "CA",
                        "postal_code": "94107",
                        "country_code": "US"
                    }
                }
            }
        ]
    };
}

async function createOrder(debug=false) {
    try {
        const request = new checkoutNodeJssdk.orders.OrdersCreateRequest();
        request.authToken("Bearer " + authToken);
        request.prefer("return=representation");
        request.requestBody(buildRequestBody());

        const response = await client.execute(request);
        if (debug){
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
        }
        return response;
    }
    catch (e) {
        console.log(e)
    }

}
// async function run() {
//     const temp = await createOrder(true);
//     // console.log(temp);
// }
//
// run();

module.exports = {createOrder:createOrder};



