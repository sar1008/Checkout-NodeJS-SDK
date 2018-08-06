
const btoa = require('btoa');
class PaypalAuthenticationToken {
    constructor(clientId, clientSecret){
        this.path = '/v1/oauth2/token';
        this.verb = 'POST';
        this.body = {grant_type:"client_credentials"};
        this.headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + btoa(clientId+":"+clientSecret)
        }
    }
}

module.exports = {PaypalAuthenticationToken: PaypalAuthenticationToken};