const express = require('express')
const router = express.Router()
const connection = require('../../helpers/connect.js')



//////// route pour afficher les membres sur la page admin   ////////////
router.get('/membres', (req, res) => {
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