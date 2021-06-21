const config = require('config');
const { promisify } = require('util');
const mysql = require('mysql');
var pool      =    mysql.createPool({
    connectionLimit : config.get('database.connectionLimit'),
    host     : config.get('database.host'),
    port     : config.get('database.port'),
    user     : config.get('database.user'),
    password : config.get('database.password'),
    database : config.get('database.database'),
    debug    : config.get('database.debug')
});    

pool.query = promisify(pool.query);

module.exports = pool;