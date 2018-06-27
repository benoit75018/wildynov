<<<<<<< HEAD
=======

>>>>>>> 66a4d17a8b1306d79c97725ea1c08f0cf8e56f0a
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const app = express()
<<<<<<< HEAD
const profilRouter = require('./routes/authcontrol/auth.js')
=======
const userRouter = require('./routes/user/user.js')
const profilRouter = require('./routes/authcontrol/auth.js')
const projetsRouter = require('./routes/allprojets/projets.js')
const addProjetsRouter = require('./routes/allprojets/addProjets.js')
>>>>>>> 66a4d17a8b1306d79c97725ea1c08f0cf8e56f0a
const connection = require('./helpers/connect.js')
const cors = require('cors')
const morgan = require('morgan')
const nodemailer = require('nodemailer')
<<<<<<< HEAD
const adminRouter = require('./routes/authcontrol/authAdmin.js')
const validator = require('express-validator')
=======
const validator = require('express-validator')
const expressJWT = require('express-jwt')

>>>>>>> 66a4d17a8b1306d79c97725ea1c08f0cf8e56f0a

const adminRouter = require('./routes/authcontrol/authAdmin.js')
const adminMember = require('./routes/admin/routes/membres.js')
const adminProject = require('./routes/admin/routes/projets.js')

/////////// Middleware/////////////////////
<<<<<<< HEAD
=======

>>>>>>> 66a4d17a8b1306d79c97725ea1c08f0cf8e56f0a
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
<<<<<<< HEAD

////////////ROUTING////////////////////////
=======
app.use(validator())
app.use(expressJWT({ secret: process.env.SECRET_TOKEN }).unless({ path: [ '/auth/signup' ] })) //protect routes


////////////ROUTING////////////////////////

app.use('/auth', profilRouter)
app.use('/projet', inProjetRouter)
app.use('/projets', seeProjetRouter)
app.use('/user', userRouter)
app.use('/authadmin', adminRouter)
app.use('/membersAdmin', adminMember)
app.use('/membersProjects', adminProject)
>>>>>>> 66a4d17a8b1306d79c97725ea1c08f0cf8e56f0a

app.use('/auth', profilRouter)
app.use('/auth', adminRouter)

////////////Routes//////////////////////

app.get('/', (req, res) => {
<<<<<<< HEAD
	res.send('Projet  ynov')
=======
	res.send('Projet ynov')
>>>>>>> 66a4d17a8b1306d79c97725ea1c08f0cf8e56f0a
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
