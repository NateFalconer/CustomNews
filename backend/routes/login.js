const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

//const User = require('../models/User');
//const Share = require('../models/shareSchema');

router.get('/', (req, res, next) => {
    res.render('index');
  });