const express = require('express');
const router = express.Router();
const connection = require('../../helpers/connect.js');



////////////Route pour ajouter un projet sur la page ajout projets ///////////
router.post('/addProjet', (req, res) => {

    const data = [

        req.body.title,
        req.body.deadline_project,
        req.body.deadline_application,
        req.body.description,
        req.body.profile_id
    ]


    const INSERT_QUERY = `INSERT INTO project ( title, 
        deadline_project, deadline_application, description, profile_id) VALUES (?,?,?,?,?)`//

    connection.query(INSERT_QUERY, data,
        (err, results) => {
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