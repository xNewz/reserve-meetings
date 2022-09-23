const router = require('express').Router();
const {
    check
} = require('express-validator');

const {
    onRegister
} = require('../services/account');

// Register page
router.post('/register', [
    check('u_username').not().isEmpty(),
    check('u_password').not().isEmpty(),
    check('u_firstname').not().isEmpty(),
    check('u_lastname').not().isEmpty(),
], async (req, res) => {
    try {
        req.validate();
        res.json(onRegister(req.body))
    } catch (ex) {
        res.error(ex);
    }
});

module.exports = router;