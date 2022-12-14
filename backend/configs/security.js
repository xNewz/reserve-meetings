const crypto = require('crypto');

module.exports = {
    password_hash(password) {
        return crypto.createHash('sha256').update(password).digest('hex');
    }
};