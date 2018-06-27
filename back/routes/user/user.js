const express = require('express')
const router = express.Router()
const verifToken = require('../../middleware/verifToken.js')


router.get('/profile', verifToken, (req, res) => {
  if (req.token.email === 'le.mikmac@gmail.com') {
    res.send("salut clément")
  } else {
    res.send('c qui ????')
  }
})


module.exports = router
