const express =require('express');
const register_route = express();

const bodyParser = require('body-parser');
register_route.use(bodyParser.json());
register_route.use(bodyParser.urlencoded({extended:true}));

const multer =require('multer')
const path = require('path');

// register_route.use(express.static('public'));

const registerController =require('../controllers/authController')

register_route.post('/register',registerController.registerPost);

module.exports =register_route
