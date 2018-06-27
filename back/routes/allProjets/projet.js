const express = require('express');
const router = express.Router();
const connection = require('../../helpers/connect.js');



////////////Ajouter un projet///////////

//test

router.post('/addProjet', (req, res) => {

    const data = [
        req.body.id_profile,
        req.body.id,
        req.body.title,
        req.body.deadline_project,
        req.body.deadline_application,
        req.body.description,
        req.body.state,
        req.body.created_at,
        req.body.updated,
        req.body.name,
        req.body.first_name,
        req.body.year,
        req.body.campus,
        req.body.password,
        req.body.email,
        req.body.skill,
        req.body.created_at_profile,
        req.body.updated_at
    ]

    const INSERT_QUERY = `INSERT INTO project (id_profile, id, title, 
        deadline_project, deadline_application, description, state, created_at,
        updated, name, first_name, year, campus, password, email, skill, created_at_profile, 
        updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`

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