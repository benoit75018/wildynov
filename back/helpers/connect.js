const mysql = require('mysql');

//////////CREATE CONNECTION ////////////

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database: 'projectynov',
    password: 'Iwant2practise'
})







module.exports = connection;