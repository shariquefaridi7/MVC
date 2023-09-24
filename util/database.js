const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'learn_sql',
    password: 'S7505606262s'
});

module.exports = pool.promise();