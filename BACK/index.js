const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors')
const { routes } = require('./src/routes');

mongoose.set('strictQuery', false);
mongoose.connect(
    'mongodb://localhost:27017/mevnshop',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const app = express();

app.use(cors())

// let allowlist = ['http://localhost:3001/']
// let corsOptionsDelegate = function (req, callback) {
//     let corsOptions;
//     if (allowlist.indexOf(req.header('Origin')) !== -1) {
//         corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
//     } else {
//         corsOptions = { origin: false } // disable CORS for this request
//     }
//     callback(null, corsOptions) // callback expects two parameters: error and options
// }

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

routes.forEach((item) => {
    app.use(`/api/v1/${item}`, require(`./src/routes/${item}`));
})



const PORT = 3000;
http.createServer({}, app).listen((PORT));
console.log(`Server running at ${PORT}`);