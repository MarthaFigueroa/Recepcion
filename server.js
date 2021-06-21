const cors = require('cors');
const config = require('config');
const routes = require('./routes');
const express = require('express');
const timeout = require('connect-timeout');
const errors = require('./app-errors/index.js');
const app = express();

app.setMaxListeners(10);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(timeout(config.get('localServer.timeout')));
app.use('/v1/api/',routes());
app.get('*',errors.error404);
app.use(errors.errorHandler);
app.listen(config.get('localServer.port'),config.get('localServer.host'),console.log('SERVER RUNNIG IN PORT:',config.get('localServer.port')));