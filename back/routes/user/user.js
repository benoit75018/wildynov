const express = require('express')
const router = express.Router()
const _ = require('lodash')
///// Importations locales ///////
const connection = require('../../helpers/connect.js')
const verifToken = require('../../middleware/verifToken.js')

//// Route du profil ////

router.get('/profile', verifToken, (req, res) => {
	const user = req.token.email

	connection.query('SELECT * FROM profile WHERE email = ?', [ user ], (selectError, results, fields) => {
		if (selectError) {
			res.send({
				code: 400,
				failed: 'error ocurred'
			})
		} else {
			results
			console.log('result: ', results)
		}
		// lodash _.pick (npm for select some to data to inject in the front )
		res.status(200).json(_.pick(results[0], [ 'name', 'first_name', 'campus', 'year', 'skill' ]))
	})
})

//// Route pour modifier le profil ////

router.put('/editprofile', verifToken, (req, res) => {
	const user = req.token.email
	const data = {
		name: req.body.name,
		first_name: req.body.first_name,
		campus: req.body.campus,
		year: req.body.year,
		skill: req.body.skill
	}

	connection.query(
		'UPDATE profile SET name = ?, first_name = ?, campus = ?, year = ?, skill = ? WHERE email = ?',
		[ data, user ],
		function(selectError, results, fields) {
			if (selectError) {
				res.send({
					code: 400,
					failed: 'error ocurred'
				})
			} else results
			// lodash _.pick (npm for select some to data to inject in the front )
			res.status(200).json(_.pick(results[0], [ 'name', 'first_name', 'campus', 'year', 'skill' ]))
		}
	)
})

module.exports = router
