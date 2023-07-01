

const Pool = require("pg").Pool; //or const { Pool } = require('pg')


const pool = new Pool({
    user : 'postgres',
    password: '1234',
    database : 'danushkanchi',
    port : '5432',
    host : 'localhost'
    // user : process.env.USER,
    // password : process.env.PASSWORD,
    // database : process.env.DATABASE,
    // port : process.env.DBPORT,
    // host : process.env.HOST

})

module.exports = pool;