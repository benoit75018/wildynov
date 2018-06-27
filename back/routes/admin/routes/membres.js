const express = require('express')
const router = express.Router()
const connection = require('../../../helpers/connect.js')

router.get('/members', (req, res) => {
	// const data = [req.body.name, req.body.first_name, req.body.year, req.body.campus]
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
