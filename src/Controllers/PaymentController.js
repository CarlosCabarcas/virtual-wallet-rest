const SoapController = require('./SoapController');
const SoapCtrl = new SoapController();

class PaymentController {
    async generatePayment(document, amount) {
        let data = {
            document: document,
            amount: amount
        };

        let request = await SoapCtrl.soapRequest('PaymentController.generatePayment', data);

        return request;
    }

    async confirmPayment(sessionId, token) {
        let data = {
            sessionId: sessionId,
            token: token
        };

        let request = await SoapCtrl.soapRequest('PaymentController.confirmPayment', data);

        return request;
    }
}

module.exports = PaymentController;