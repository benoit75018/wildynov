const express = require('express')
const router = express.Router()
const connection = require('../../helpers/connect.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')





const admin = {
      email: 'admin@test.com',
      password: '123'
}
const secret = 'asgdet1234AZSDaz4598FVJODSsxscce12479cdddcb2HHSTCHGVezas1297anbx'

router.post('/login', (req, res) => {
    if (!req.body) {
        res.sendStatus(500)
    } else {
        if (admin.email === req.body.email && admin.password === req.body.password) {
            const myToken = jwt.sign({
                user: 'Tanaka',
                role: 'Admin'
            }, secret)

            res.json(myToken)
        } else {
            res.sendStatus(401)
        }
    }
})


module.exports = router