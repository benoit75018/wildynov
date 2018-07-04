const mysql = require('mysql')

//////////CREATE CONNECTION ////////////

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'projectynov',
<<<<<<< HEAD
	password: 'Iwant2practise'
=======
	password: 'yolo6789'
>>>>>>> 1e4346a4bfb9becd8dbcc504a36a6f096a99e640
})

module.exports = connection
