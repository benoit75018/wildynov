const mysql = require('mysql')

//////////CREATE CONNECTION ////////////

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'projectynov',
	password: ''
})

module.exports = connection
