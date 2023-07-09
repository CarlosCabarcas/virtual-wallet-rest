const SoapController = require('./SoapController');
const SoapCtrl = new SoapController();

class ClientController {
    async createClient(document, names, email, phone) {
        let client = {
            document: document,
            names: names,
            email: email,
            phone: phone
        };

        let request = await SoapCtrl.soapRequest('ClientController.createClient', client);

        return request;
    }
}

module.exports = ClientController;