const router = require('express').Router();

// Register page
router.post('/register', (req, res) => {
    res.json({
        message: 'Register page'
    })

});

module.exports = router;