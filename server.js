'use strict';

 // Express framework.
const express = require('express');
// Creates an Express application.
const app = express();

/**
 * Creates a GET (which is defined by the method invoked on 'app') endpoint,
 * having 'parallel-soap-invoke' as entry point.
 * Each time a GET request arrives at '/parallel-soap-invoke', the function passed
 * as the second parameter from app.get will be invoked.
 * The signature is fixed: the request and response objects.
 */
app.get('/parallel-soap-invoke', (_, res) => {
    // HTTP status of the response is set first and then the result to be sent.
    res.status(200).send('Hello!');
});

// Starts 'app' and sends a message when it's ready.
app.listen(3000, () => console.log('Waiting for incoming requests.'));