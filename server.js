const express = require('express'), bodyParser = require('body-parser');
const soap = require('strong-soap').soap;
const ClientController = require('./src/Controllers/ClientController');
const WalletController = require('./src/Controllers/WalletController');
const PaymentController = require('./src/Controllers/PaymentController');
const clientCtrl = new ClientController();
const walletCtrl = new WalletController();
const paymentCtrl = new PaymentController();

const app = express();
app.use(bodyParser.json());

// Define la ruta para consumir el servicio SOAP
app.post('/CreateClient', async (req, res) => {
    let { document, names, email, phone } = req.body;

    response = await clientCtrl.createClient(document, names, email, phone);

    res.send(response);
});

app.post('/RechargeWallet', async (req, res) => {
    let { document, phone, amount } = req.body;

    response = await walletCtrl.rechargeWallet(document, phone, amount);

    res.send(response);
});

app.post('/GeneratePayment', async (req, res) => {
    let { document, amount } = req.body;

    response = await paymentCtrl.generatePayment(document, amount);

    res.send(response);
});

app.post('/ConfirmPayment', async (req, res) => {
    let { sessionId, token } = req.body;

    response = await paymentCtrl.confirmPayment(sessionId, token);

    res.send(response);
});

app.post('/GetBalance', async (req, res) => {
    let { document, phone } = req.body;

    response = await walletCtrl.getBalance(document, phone);

    res.send(response);
});

// Inicia el servidor
app.listen(3000, () => {
  console.log('Servidor Express iniciado en el puerto 3000');
});