const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const {
    check,
    validationResult
} = require('express-validator');
const server = express();
const PORT = 3000;

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

server.post('/', [
    check('firstname').not().isEmpty(),
    check('lastname').not().isEmpty()
], (req, res) => {
    // try {
    //     validationResult(req).throw();
    //     res.json(req.body);
    // }
    // catch (ex) {
    //     res.status(400).json({message: ex.message});
    // }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    } else {
        validationResult(req).throw();
        res.json(req.body);
    }
});

server.get('*', (req, res) => {
    res.end(`<h1>Server is started</h1>`);
})

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));