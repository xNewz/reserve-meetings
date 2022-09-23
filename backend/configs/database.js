const mysql = require('mysql');

const connection = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '12345678',
    database: 'meeting_room_db',
    charset: 'utf8',
});

connection.getConnection((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Database connected');
    }
});

module.exports = connection;