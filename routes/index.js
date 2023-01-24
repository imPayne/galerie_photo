const Pictures = require('../database');
var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

const multer  = require('multer');
const upload = multer({ dest: './public/uploads/' });

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Photo gallery'});
});

// POST file form
router.post('/fileupload', upload.single('file'), (req, res) => {
  let newFile = req.file;

  if(newFile) {
    console.log(newFile)
    res.render('index', { title: 'Photo gallery', imgPath: `/uploads/${newFile.filename}`});
  }
});

module.exports = router;
