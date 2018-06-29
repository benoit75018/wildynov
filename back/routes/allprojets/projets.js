const express = require('express')
const router = express.Router()
const connection = require('../../helpers/connect.js')



///////////Route pour afficher les projets sur la page projet////////////////////////////
router.get('/showProjet', (req, res) => {
  const SELECT_QUERY = 'SELECT * FROM project'
  connection.query(SELECT_QUERY, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.send({
        results
      })
    }
  })
})

module.exports = router