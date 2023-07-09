const soap = require('strong-soap').soap;
const url = 'http://localhost:8080/index.php?wsdl';

class SoapController {
    async soapRequest(action, requestArgs) {
        let promise = new Promise((resolve, reject) => {
            var options = {};
            soap.createClient(url, options, function(err, client) {
                var method = client[action];
                method(requestArgs, function(err, result, envelope, soapHeader) {
                    resolve(result.return.$value);
                });
            });
        });

        return promise;
    }
}

module.exports = SoapController;