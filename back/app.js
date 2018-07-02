const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const userRouter = require('./routes/user/user.js')//
const profilRouter = require('./routes/authcontrol/auth.js')//
const inProjetRouter = require('./routes/allprojets/projet.js')//(Route ajouter un projet sur la page ajout projets)
const seeProjetRouter = require('./routes/allprojets/projets.js')//(Route afficher les projets sur la page projet)
const adminRouter = require('./routes/admin/authAdmin')//(Route connexion Admin)
const adminMember = require('./routes/admin/membresadmin')//(Route pour afficher les membres sur la page Admin)
const adminProject = require('./routes/admin/projetsadmin')//(Route pour afficher les projets sur la page Admin)
const registrationUser = require('./routes/inscription/inscription')


const connection = require('./helpers/connect.js')
const cors = require('cors')
const morgan = require('morgan')
const nodemailer = require('nodemailer')
const validator = require('express-validator')
const app = express()


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


app.use('/projet', inProjetRouter)
app.use('/projets', seeProjetRouter)
app.use('/user', userRouter)
app.use('/membresadmin', adminMember)
app.use('/projetsadmin', adminProject)
app.use('/auth', profilRouter)
app.use('/auth', adminRouter)
app.use('/user', registrationUser)

////////////Routes//////////////////////

app.get('/', (req, res) => {
	res.send('Projet ynov')
})

//////////CONNECT MYSQL//////////////
connection.connect((error) => {
	if (error) {
		console.log(error)
	} else {
		console.log('Base de données connectée')
	}
})

////////////////Port server//////////////////////

app.listen(8080, console.log('Je suis connecté sur le port 8080'))