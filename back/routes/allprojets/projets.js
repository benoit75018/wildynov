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


///////////Route pour afficher un seul projet sur la page details projet////////////////////////////
router.get('/showProjetDetails/:id', (req, res) => {
  const SELECT_QUERY = `
    SELECT
      project.*,
      profile.email,
      profile.campus,
      profile.name,
      profile.first_name,
      profile.skill
    FROM project LEFT JOIN profile
    ON project.profile_id = profile.id 
    WHERE project.id=?
  `
  connection.query(SELECT_QUERY, [req.params.id], (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.send(results[0])
    }
  })
})




///////////Route pour joindre un projet sur la page details projet////////////////////////////

// router.put('/ProjetJoin', verifToken, (req, res) => {
//   connection.query(`
//   UPDATE project
//   SET title=?,
//       profile_id=?,
//       deadline_project=?,
//       deadline_application=?,
//       description=?`, [
//       req.body.title,
//       req.token.userID,
//       req.body.deadline_project,
//       req.body.deadline_application,
//       req.body.description,
//   ], (err, results) => {
//       if (err) {
//           res.send(err);
//       } else {
//           return res.send({
//               results
//           })
//       }
//   })

module.exports = router

