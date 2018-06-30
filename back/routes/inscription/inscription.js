const express = require('express');
const router = express.Router();
const connection = require('../../helpers/connect.js');
const verifToken = require('../../middleware/verifToken.js')


router.post('/registration', (req, res) => {
    const data = [
        req.body.name, 
        req.body.first_name, 
        req.body.year, 
        req.body.campus, 
        req.body.skill,
        
    ]

    const INSERT_SIGNUP_QUERY = `INSERT INTO profile (name, first_name, year, campus,skill)
                                VALUES (?, ?, ?, ?, ?);`
                    
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
