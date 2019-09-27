const express = require('express');
const router  = express.Router();
const Liquor = require('../models/Liquor');
// const multer  = require('multer');
// const Picture = require('../models/Picture');
// const upload = multer({ dest: './public/uploads/' });

/* GET home page */
router.get('/', (req, res, next) => {

  let isAdmin = false;
  let isEmployee = false;
  let isVendor = false;

  if (!req.user) {
    res.redirect('/users/login')
  } else if (req.user.role == "Administrator") {
      isAdmin = true;
    } else if (req.user.role == "Employee") {
      isEmployee = true;
    } else if (req.user.role == "Vendor") {
      isVendor = true;
    }

  res.render('index', {isAdmin, isEmployee, isVendor});

});

module.exports = router;
