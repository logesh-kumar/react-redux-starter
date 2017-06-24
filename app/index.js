const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;
const ADDRESS = process.env.ADDRESS || '0.0.0.0';
const ENV = process.env.APP_ENV || 'development';
const routes = require('./routes')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());
app.use(cors());
routes(router);
app.use('/api', router);

app.listen(PORT, ADDRESS, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('env :', ENV);
    console.log('Listening at ' + ADDRESS + ':', PORT);
});

