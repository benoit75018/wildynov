const express = require('express')
const router = express.Router()
const connection = require('../../helpers/connect.js')
const verifToken = require('../../middleware/verifToken.js')

router.put('/registration', verifToken, (req, res) => {
	const name = req.body.name
	const first_name = req.body.first_name
	const year = req.body.year
	const campus = req.body.campus
	const skill = req.body.skill
	const email = req.body.email

	connection.query(
		`UPDATE profile 
    SET name=?,
    first_name=?,
    year=?,campus=?,
    skill=? 
    where email=?`,
		[ req.body.name, req.body.first_name, req.body.year, req.body.campus, req.body.skill, req.body.email ],
		(err, results, fields) => {
			if (err) {
				res.send(err)
			} else {
				return res.send({
					results
				})
			}
		}
	)
})

module.exports = router
