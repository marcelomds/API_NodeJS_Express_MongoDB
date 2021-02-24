const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.locals.layout = false;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/controllers/index')(app);

app.listen(8085, () => {
   console.log('Iniciado...');
});