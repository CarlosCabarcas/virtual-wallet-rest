const SoapController = require('./SoapController');
const SoapCtrl = new SoapController();

class WalletController {
    async rechargeWallet(document, phone, amount) {
        let data = {
            document: document,
            phone: phone, 
            amount: amount
        };

        let request = await SoapCtrl.soapRequest('WalletController.rechargeWallet', data);

        return request;
    }

    async getBalance(document, phone) {
        let data = {
            document: document,
            phone: phone
        };

        let request = await SoapCtrl.soapRequest('WalletController.getBalance', data);

        return request;
    }
}

module.exports = WalletController;