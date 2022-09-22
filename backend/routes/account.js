const router = require('express').Router();
const {
    check,
    validationResult
} = require('express-validator');

// Register page
router.post('/register', [
    check('u_username').not().isEmpty(),
    check('u_password').not().isEmpty(),
    check('u_firstname').not().isEmpty(),
    check('u_lastname').not().isEmpty(),
], (req, res) => {
    try {
        req.validate();
        res.json({
            message: req.body
        })
    } catch (ex) {
        res.error(ex);
    }
});

module.exports = router;