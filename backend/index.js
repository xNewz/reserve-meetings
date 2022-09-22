const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const {
    check,
    validationResult
} = require('express-validator');
const server = express();
const PORT = 3000;

const connect = require("./configs/database");

// connect.query('show tables', (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// });

// Set up the session
server.use(expressSession({
    secret: 'lorem ipsum',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}))

// Parse when client request send data
server.use(bodyParser.urlencoded({
    extended: false
}));
server.use(bodyParser.json());

// Middleware
server.use(require('./configs/middleware'));

// Call the router
server.use('/api', require('./routes'));

server.get('*', (req, res) => {
    res.end(`<h1>Server is started</h1>`);
})

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));