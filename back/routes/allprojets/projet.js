const express = require('express');
const router = express.Router();
const connection = require('../../helpers/connect.js');
const verifToken = require('../../middleware/verifToken.js')



////////////Route pour ajouter un projet sur la page ajout projets ///////////
router.post('/addProjet', verifToken, (req, res) => {

    connection.query(`
    INSERT INTO project
    SET title=?,
        deadline_project=?,
        deadline_application=?,
        description=?`, [
        req.body.title,
        req.body.deadline_project,
        req.body.deadline_application,
        req.body.description,
        req.token.userID,
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