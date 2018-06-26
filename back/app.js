const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const app = express()
const userRouter = require('./routes/user/user.js')
const profilRouter = require('./routes/authcontrol/auth.js')
const projetsRouter = require('./routes/allprojets/projets.js')
const addProjetsRouter = require('./routes/allprojets/addProjets.js')
const connection = require('./helpers/connect.js')
const cors = require('cors')
const morgan = require('morgan')
const nodemailer = require('nodemailer')
const validator = require('express-validator')
const adminRouter = require('./routes/authcontrol/authAdmin.js')

/////////// Middleware/////////////////////

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(validator())


////////////ROUTING////////////////////////

app.use('/auth', profilRouter)
app.use('/user', userRouter)
app.use('/allprojets', projetsRouter)
app.use('/allprojets', addProjetsRouter)
app.use('/authadmin', adminRouter)

////////////Routes//////////////////////

app.get('/', (req, res) => {
	res.send('Projet ynov')
})

//////////CONNECT MYSQL//////////////
connection.connect((error) => {
	if (error) {
		console.log(error)
	} else {
		console.log('Base de données connecté')
	}
})

////////////////Port server//////////////////////

app.listen(8080, console.log('Je suis connecté sur le port 8080'))
