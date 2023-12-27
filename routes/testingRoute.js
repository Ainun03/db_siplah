const express =require('express');
const testing_route = express();

const bodyParser = require('body-parser');
testing_route.use(bodyParser.json());
testing_route.use(bodyParser.urlencoded({extended:true}));

const multer =require('multer')
const path = require('path');

// register_route.use(express.static('public'));

const testingController =require('../controllers/testingController')

testing_route.post('/post',testingController.testingPost);

module.exports =testing_route
