const express = require('express');
const router = express.Router();
const connection = require('../../helpers/connect.js');
const verifToken = require('../../middleware/verifToken.js')


router.post('/registration', verifToken, (req, res) => {
    const data = [
        req.body.id, 
        req.body.name, 
        req.body.first_name, 
        req.body.year, 
        req.body.campus, 
        req.body.password, 
        req.body.email,
        req.body.skill,
        req.body.created_at, 
        req.body.updated_at
    ]

    const INSERT_SIGNUP_QUERY = `INSERT INTO profile (id, name, first_name, year, campus,password, email,skill,created_at, updated_at)
                                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`
                    
    connection.query(INSERT_SIGNUP_QUERY, data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            return res.send({
                results
            })
        }
    });

});

module.exports = router;
