'use strict';
const checkoutNodeJssdk = require('../lib/lib');
const paypalAuthenticationToken = require('./paypalAuthenticationToken');
class TestEnvironment extends checkoutNodeJssdk.core.CheckoutNodeJssdkEnvironment {
  constructor() {
    super(process.env.BASE_URL);
  }
}

// TODO use pretty print everywhere
async function prettyPrint(jsonData, pre=""){
    let pretty = "";
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    for (let key in jsonData){
        if (jsonData.hasOwnProperty(key)){
            if (isNaN(key))
              pretty += pre + capitalize(key) + ": ";
            else
              pretty += pre + (parseInt(key) + 1) + ": ";
            if (typeof jsonData[key] === "object"){
                pretty += "\n";
                pretty += await prettyPrint(jsonData[key], pre + "\t");
            }
            else {
                pretty += jsonData[key] + "\n";
            }

        }
    }
    return pretty;
}

function client() {
    return new checkoutNodeJssdk.core.CheckoutNodeJssdkHttpClient(new TestEnvironment());
}

async function authentication(){
  let request = new paypalAuthenticationToken.PaypalAuthenticationToken('AVNCVvV9oQ7qee5O8OW4LSngEeU1dI7lJAGCk91E_bjrXF2LXB2TK2ICXQuGtpcYSqs4mz1BMNQWuso1',
        'EDQzd81k-1z2thZw6typSPOTEjxC_QbJh6IithFQuXdRFc7BjVht5rQapPiTaFt5RC-HCa1ir6mi-H5l');
  let response = await client().execute(request);
  return response.result.access_token;
}

module.exports = {client: client, authentication:authentication, prettyPrint:prettyPrint};
