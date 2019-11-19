// import express from 'express';
// let router = express.Router();

const express = require('express');
var router = express.Router();

~router.get('/v1/articles', function(req, res) {
	res.send('View All Teamwork Articles');
});

// Posting to database.
router.post('/article/new', function(req, res) {
	//CREATING A NEW ARTICLE
});
router.put('/', function(req, res) {});

module.exports = router;
