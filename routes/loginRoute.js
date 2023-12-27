const express =require('express');
const login_route = express();

const bodyParser = require('body-parser');

const registerController =require('../controllers/authController')

// =----- LOgin
login_route.use(bodyParser.json());
login_route.use(bodyParser.urlencoded({extended:true}));

login_route.post('/login',registerController.loginPost);

module.exports =login_route
