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




router.put('/projet', (req, res) => {


	const title = req.body.title
	const deadline_project = req.body.deadline_project
	const deadline_application = req.body.deadline_application
	const description = req.body.description
	const profile_id = req.body.profile_id
	

	

	connection.query(`UPDATE profile SET title=?,deadline_project=?,deadline_application=?,description=?,profile_id =? WHERE id=?`, [req.body.title, req.body.deadline_project, req.body.deadline_application, req.body.description, req.body.profile_id], (err, results, fields) => {
		if (err) {
			res.send(err);

		} else {
			return res.send({
				results
			})

		}

	});

});



module.exports = router