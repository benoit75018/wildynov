const express = require("express")
const router = express.Router()
const connection = require("../../helpers/connect.js")
const verifToken = require("../../middleware/verifToken.js")

///////////Route pour afficher les projets sur la page projet////////////////////////////
router.get("/showProjet", (req, res) => {
  const SELECT_QUERY = "SELECT * FROM project"
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
router.get("/showProjetDetails/:id", (req, res) => {
  const SELECT_PROJECT_QUERY = `
    SELECT *
    FROM project 
    WHERE id=?
  `

  const SELECT_MEMBERS_QUERY = `
    SELECT 
      profile.email,
      profile.campus,
      profile.name,
      profile.first_name,
      profile.skill
    FROM project_has_profile LEFT JOIN profile
    ON project_has_profile.profile_id = profile.id
    WHERE project_has_profile.project_id=?
  `

  connection.query(SELECT_PROJECT_QUERY, [req.params.id], (err, [project]) => {
    if (err) {
      return res.send(err)
    } else if (!project) {
      return res.send("project not found", 404)
    } else {
      connection.query(
        SELECT_MEMBERS_QUERY,
        [req.params.id],
        (err, members) => {
          console.log({
            err,
            members
          })
          if (err) {
            return res.send(err)
          } else {
            project.members = members
            return res.json(project)
          }
        }
      )
    }
  })
})

///////////Route pour joindre un projet sur la page details projet////////////////////////////

router.post("/ProjetJoin/:projectId", verifToken, (req, res, next) => {
  const member = req.token.userID
  const SELECT_COUNT = `SELECT COUNT(*) FROM project_has_profile WHERE project_id=?`
  const INSERT_ID = `REPLACE INTO project_has_profile VALUES (?,?)`

  connection.query(SELECT_COUNT, [req.params.projectId], (err, result) => {
    if (err) return next(err)
    if (result.length && result[0]["COUNT(*)"] >= 5) {
      return res.json({ error: "full project" })
    } else {
      connection.query(
        INSERT_ID,
        [req.params.projectId, member],
        (err, result) => {
          if (err) {
            next(err)
          } else {
            res.send(result)
          }
        }
      )
    }
  })
})

module.exports = router
