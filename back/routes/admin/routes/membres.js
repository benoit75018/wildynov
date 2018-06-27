const express = require('express')
const router = express.Router()
const connection = require('../../../helpers/connect.js')

//////// route pour afficher les membres ////////////

router.get('/members', (req, res) => {
	const SELECT_PROFILE_QUERY = `SELECT * FROM profile`

	connection.query(SELECT_PROFILE_QUERY, (err, results) => {
		if (err) {
			res.send(err)
		} else {
			return res.send({
				results
			})
		}
	})
})

module.exports = router
