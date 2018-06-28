const express = require('express')
const router = express.Router()
const connection = require('../../helpers/connect.js')



//////// route pour afficher les projets sur la page admin////////////
router.get('/projet', (req, res) => {
	const SELECT_PROJECT_QUERY = `SELECT * FROM project`

	connection.query(SELECT_PROJECT_QUERY, (err, results) => {
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