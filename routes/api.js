const express = require('express');
const router  = express.Router();
const User    = require('../models/User')

app.post('/api/user', function(req, res) {
    User.create({
      username: req.body.username,
      password: req.body.password,
      role: req.body.role,
    }).then(user => {
      res.json(user)
    });
});

  // let isAdmin = false;
  // let isVendor = false;
  // let isEmployee = false;

  // if (req.user.role == 'Administrator') {
  //   console.log("This user is an admin")
  //   isAdmin = true;
  //   console.log(isAdmin)
  // } else if (req.user.role == 'Vendor') {
  //   console.log("This user is a vendor")
  //   isVendor = true;
  //   console.log(isVendor)
  // } else if (req.user.role == 'Employee') {
  //   console.log("This user is an employee")
  //   isEmployee = true;
  //   console.log(isEmployee)
  // }
  // {isAdmin, isEmployee, isVendor}