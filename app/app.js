const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const routes_control = require('./routes/control/control.routes');

const app = express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());
app.use(bodyparser.json());

app.use('/control', routes_control);

module.exports = app;