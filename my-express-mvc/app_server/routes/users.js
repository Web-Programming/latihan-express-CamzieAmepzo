var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

const ctrlAuth = require('../controllers/controllerAuth');
router.post('/register', ctrlAuth.register); //https://localhost:3000/users/register
router.post('/login', ctrlAuth.login); //https://localhost:3000/users/login

module.exports = router;
