const express = require('express')
const router = express.Router()
const _ = require('lodash')
///// Importations locales ///////
const connection = require('../../helpers/connect.js')
const verifToken = require('../../middleware/verifToken.js')

//// Route du profil ////

router.get('/profile', (req, res) => {
	// const user = req.token.email
	console.log( ' je suis la ' )
	const user = 'rameaubenoit@hotmail.fr'

	connection.query('SELECT * FROM profile WHERE email = ?',[ user], (selectError, results, fields) => {
		if (selectError) {
			res.send({
				code: 400,
				failed: 'error ocurred'
			})
		} else results
		// lodash _.pick (npm for select some to data to inject in the front )
		res.status(200).json(_.pick(results[0], [ 'name', 'first_name', 'campus', 'year', 'skill' ]))
	})
})

//// Route pour modifier le profil ////

router.put('/editprofile', verifToken, (req, res) => {
	const email = req.token.email

	const data = {
		name: req.body.name,
		first_name: req.body.first_name,
		campus: req.body.campus,
		year: req.body.year,
		skill: req.body.skill
	}

	console.log('ich been here')

	connection.query(
		'UPDATE profile SET name = ?, first_name = ?, campus = ?, year = ?, skill = ? WHERE email = ?',
		[ data.name, data.first_name, data.campus, data.year, data.skill, email ],
		function(selectError, results, fields) {
			if (selectError) {
				console.log({ selectError })
				res.send({
					code: 400,
					failed: 'error ocurred'
				})
			} else {
				// lodash _.pick (npm for select some to data to inject in the front )
				const r = _.pick(results[0], [ 'name', 'first_name', 'campus', 'year', 'skill' ])
				res.json(r)
			}
		}
	)
})

module.exports = router
