const mysql = require('mysql')

//////////CREATE CONNECTION ////////////

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'projectynov',
<<<<<<< HEAD
	password: 'Iwant2practise'
=======
	password: ''
>>>>>>> c4f398afedc062b72cfcd5eed6a6c82bf28414b0
})

module.exports = connection
