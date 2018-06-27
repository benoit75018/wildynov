const mysql = require('mysql')

//////////CREATE CONNECTION ////////////

const connection = mysql.createConnection({
<<<<<<< HEAD
    host : 'localhost',
    user : 'root',
    database: 'projectynov',
    password: 'Iwant2practise'
=======
	host: 'localhost',
	user: 'root',
	database: 'projectynov',
	password: 'JSSB'
>>>>>>> 66a4d17a8b1306d79c97725ea1c08f0cf8e56f0a
})

module.exports = connection
