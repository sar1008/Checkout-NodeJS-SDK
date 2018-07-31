'use strict';

const chai = require('chai');
const client = require('../skeleton').client();
const checkoutNodeJssdk = require('../../lib/lib');


function buildRequestBody() {
  return JSON.parse('{"application_context":{"landing_page":"iZJxt5c3weh z64gG","locale":"YJ5bDS1TfeyTtP09Lz","payment_token":"ziIQaYLcicrhLMcQiK","return_url":"QYRe288YN62","user_action":"C0bs9XGgecM2t52HYL","brand_name":"9ZGO947z4NuN9","payment_method":{"buyer_selected":"Ttcaf6IR2RuFM","seller_preferred":"cs6VNUIrZHTJiY2"},"shipping_preference":"PHFAEgDYJdh","cancel_url":"pZCNLp 9uVq243"},"intent":"qWhKAuUsf2PhG8","payer":{"name":{"middle_name":"SccERPgtE7zNR1QBfF","prefix":"yzCg2qaa4HP0e","suffix":"uaAXCtyGww6ii","surname":"8g1MObh07 68","alternate_full_name":"SHS0CHrzILcg81","full_name":"q8VtX82Nys","given_name":"IWTQVdvfCdF"},"payer_id":"hIaf584x7DC5hD","phone":{"phone_number":{"country_code":"h1Axh3IgRwDUFbsFucE","extension_number":"rp2BYRL8AK5tz","national_number":"8xMbPFIZz9ZD9W7NQ"},"phone_type":"LO3Np 8dIrS"},"tax_info":{"tax_id":"vOHvK9shP7iXUrIZe","tax_id_type":"RBDz1Iq73M"},"address":{"address_line_1":"SBM7fWebR0Wf","address_line_2":"Hqrv UBqw7fiOgh1","admin_area_3":"cJz2K89xZp0","admin_area_4":"Mb7A0PCyR4NJ","country_code":"h1z9YrurVHZ","address_details":{"building_name":"iNDQc9uUzs","delivery_service":"TfIA1xhrZBJEb6I8BWx","street_name":"WJVK2sb7G2dxufc","street_number":"gUdvOLx3MNL V30PP","street_type":"erUZZpDLsT9wQXSeI","sub_building":"rQUPSwBfU4PI2FrpE"},"address_line_3":"XdHPAAK4eUTbyWSthK","admin_area_1":"T4T 4Fb7XaryHLbHONa","admin_area_2":"s3BHRDLDSYEI5vt3","postal_code":"fYqdR46cF92"},"birth_date":"tiJz1iKWSQB9z","email_address":"ME8DdPuS1xh4w8Yxpd","external_id":"QCDpZ9NeLdMZCgK5"},"purchase_units":{"custom_id":"xc0Gv y3JstNgeH","description":"pAXsaQZiv83uSO4","items":{"tax":{"currency_code":"FqCfhMh7LJT6t","value":"7fvhNyJxTFPvRv4cC1"},"unit_amount":{"currency_code":"ii9K13K3TsWeWBKCUKd","value":"0Pve4aHFAvw3"},"url":"Jy8PhTpLTQtzv","category":" d GtEPrw3 z","description":"3vA1uDPOHTgr6EA g","name":"s3TAEacTpFGUSKxv","quantity":"TWtHz56vFfG5t","sku":"SEPgVO4JpJ28"},"payment_instruction":{"platform_fees":{"amount":{"currency_code":"pAQdK5MAOZ9Ry","value":"AcMahStXbs"},"payee":{"email_address":"cWfRQvcXONH6TivBCO","merchant_id":"8h s9VhtMHhpI5p1aRB"}},"disbursement_mode":"4V4YEHXgacT"},"amount":{"breakdown":{"tax_total":{"currency_code":"p5a5ZKRFWK2ubXT FS5","value":"SGRN1TwWDV2gz1x1E"},"gift_wrap":{"currency_code":"p8BZN6gTWq66iQXJap","value":"96gGWRCsfW1Fc"},"handling":{"currency_code":"H11HWauecqdJ ","value":"HKyHuW sY3Vy"},"insurance":{"currency_code":"R7QdxX2ZsxHhgQV","value":"z1FBZ6qv7sZDuSQZKW"},"item_total":{"value":"WuJIuK0C9IpdG8PzigL","currency_code":"LCY58wEH08"},"shipping":{"currency_code":"fsQ11xaSEQ3EM7","value":"aY96txeQS0B0zMUSOC"},"shipping_discount":{"currency_code":"u9c7pSgLSYZGiXEL4W","value":"Zryef6y5Rp9RvBd5K"}},"currency_code":"8PB5E7fYJf","value":"uzwNNIF tXSI KXaZ"},"invoice_id":"J28VtBi9Suw","payee":{"display_data":{"brand_name":"1vB7REaJ5L","business_email":"FNzSAahKt5g0TZWfwH","business_phone":{"country_code":"3XJr9IhPCUaK","extension_number":"a Rxvx1Ht5","national_number":"DPC1TK3qEKu9gXhtg"}},"email_address":"uY8gQwtqhYXL","merchant_id":"1EQIyOi2MuVrC"},"reference_id":"E3CA3pG6A Rz2","shipping":{"address":{"address_details":{"sub_building":"98zi7Cyg3NNgRvJU43","building_name":"zxECY7Q1te6ZM2T3qEw","delivery_service":"buSK d ML01O","street_name":"IY5JzEqW6wdKPw","street_number":" TrsGOXPhHPIwPLwtO","street_type":"vKVwYwBeyZUfHeUXVS"},"address_line_1":"BBTDxetBGtxXK5Se","admin_area_2":"EFKVRKIzpqY","admin_area_3":"bSLKH4Ci0d0euqPz","country_code":"Q3etZtHwYfDufa2sF","postal_code":"5M 1AccPTKcQi","address_line_2":"7CdzVp2e2Fdh","address_line_3":"FJ8Z1UbQTh2U5","admin_area_1":"i6YNEhhyO5LS1","admin_area_4":"D4VfFTN6CfTqSLi"},"method":"dOQKSvHtAwybWgMJy","name":{"alternate_full_name":"iBDTF8swR3JLKhK","full_name":"RNKyxXeQ9Zwu","given_name":"qdOeB DXKsGX OuF","middle_name":"AFFNsdQD70C","prefix":"9VpbSLNF8hy","suffix":"ViBYaFiCJed","surname":"7Pihrt7Oxa8"}},"soft_descriptor":"DG9qOv5wRecHcN"}}');
}

describe('OrdersCreateRequest', function () {
  it('works as expected', function () {
    let request = new checkoutNodeJssdk.orders.OrdersCreateRequest();
    request.payPalPartnerAttributionId('q0EU EHuVVBuAqiR1');
    request.prefer('ri8g u5wQf1T1e');
    request.requestBody(buildRequestBody());

    return client.execute(request).then((r) => {
      chai.assert.equal(r.statusCode, 201);
      chai.assert.isNotNull(r.result);

      // Add your own checks here
    });
  });
});
