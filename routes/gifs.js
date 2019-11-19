// require("express-async-errors");
const { Router } = require('express');
// const UserController = require("../controllers/user.controller");
// const auth = require("../middlewares/auth");
// const isAdmin = require("../middlewares/admin");

const router = Router();
router.get('/v1/gifs', function(req, res) {
	res.send('Welcome to teamwork Gifs');
});

module.exports = router;
