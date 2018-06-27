const express = require('express');
const router = express.Router();
const connection = require('../../helpers/connect.js');

Router.get('/projects', (req, res) => {
const sql = `SELECT * FROM projects`
}
