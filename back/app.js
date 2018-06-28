const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const userRouter = require('./routes/user/user.js')
const profilRouter = require('./routes/authcontrol/auth.js')
const inProjetRouter = require('./routes/allprojets/projet.js')
const seeProjetRouter = require('./routes/allprojets/Projets.js')
const connection = require('./helpers/connect.js')
const cors = require('cors')
const morgan = require('morgan')
const nodemailer = require('nodemailer')
const validator = require('express-validator')
const app = express()

const adminRouter = require('./routes/authcontrol/authAdmin.js')
const adminMember = require('./routes/admin/routes/membres.js')
const adminProject = require('./routes/admin/routes/projets.js')

/////////// Middleware/////////////////////
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json())
app.use(cors())
app.use(validator())
// app.use(expressJWT({ secret: process.env.SECRET_TOKEN }).unless({ path: [ '/auth/signup' ] })) //protect routes

////////////ROUTING////////////////////////

app.use('/auth', profilRouter)
app.use('/projet', inProjetRouter)
app.use('/projets', seeProjetRouter)
app.use('/user', userRouter)
app.use('/authadmin', adminRouter)
app.use('/membersAdmin', adminMember)
app.use('/membersProjects', adminProject)
app.use('/auth', profilRouter)
app.use('/auth', adminRouter)

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