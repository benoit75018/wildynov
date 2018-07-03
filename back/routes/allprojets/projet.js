const express = require('express');
const router = express.Router();
const connection = require('../../helpers/connect.js');
const verifToken = require('../../middleware/verifToken.js')



////////////Route pour ajouter un projet sur la page ajout projets ///////////
router.post('/addProjet', verifToken, (req, res) => {

    connection.query(`
    INSERT INTO project
    SET title=?,
        profile_id=?,
        deadline_project=?,
        deadline_application=?,
        description=?`, [
        req.body.title,
        req.token.userID,
        req.body.deadline_project,
        req.body.deadline_application,
        req.body.description,
    ], (err, results) => {
        if (err) {
            res.send(err);
        } else {
            return res.send({
                results
            })
        }

    })
})
module.exports = router;