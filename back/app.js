const express = require("express")
const bodyParser = require("body-parser")
const mysql = require("mysql")
const app = express()
const profilRouter = require("./routes/authcontrol/auth.js")
const connection = require("./helpers/connect.js")
const cors = require("cors")
const morgan = require("morgan")
const nodemailer = require("nodemailer")
const adminRouter = require("./routes/authcontrol/authAdmin.js")
const validator = require("express-validator")

/////////// Middleware/////////////////////
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

////////////ROUTING////////////////////////

app.use("/auth", profilRouter)
app.use("/auth", adminRouter)

////////////Routes//////////////////////

app.get("/", (req, res) => {
  res.send("Projet  ynov")
})

//////////CONNECT MYSQL//////////////
connection.connect(error => {
  if (error) {
    console.log(error)
  } else {
    console.log("Base de données connecté")
  }
})

////////////////Port server//////////////////////

app.listen(8080, console.log("Je suis connecté sur le port 8080"))
