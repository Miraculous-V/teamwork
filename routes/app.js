// import express from 'express';
// let router = express.Router();
const express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function(req, res) {
	res.send('Welcome to teamwork');
});

// Posting to database.
router.get('/about', function(req, res) {
	res.send('About teamwork');
});

module.exports = router;
