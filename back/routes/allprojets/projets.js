const express = require('express')
const router = express.Router()
<<<<<<< HEAD:back/routes/allProjets/projets.js
const verifToken = require('../../middleware/verifToken.js')
=======
>>>>>>> 7e16eac74f3c60ed2cefad5961b2659d5ba2ee2c:back/routes/allprojets/projets.js
const connection = require('../../helpers/connect.js')



<<<<<<< HEAD:back/routes/allProjets/projets.js

/// ////////Afficher un projet ////////////////////////////
router.get('/showProjet', verifToken, (req, res) => {
=======
///////////Route pour afficher les projets sur la page projet////////////////////////////
router.get('/showProjet', (req, res) => {
>>>>>>> 7e16eac74f3c60ed2cefad5961b2659d5ba2ee2c:back/routes/allprojets/projets.js
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