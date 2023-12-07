const mysql = require('mysql');
const{ promisify } = require('util');
const enviroment = require('./../enviroments');

const pool = mysql.createPool(enviroment.db_keys);

pool.getConnection((err, conection) => {
    if(err) {
        console.log(err);
        return;
    }
    conection.release();
    console.log('db conected mysql');
    return;
});

pool.query = promisify(pool.query);

module.exports = pool;