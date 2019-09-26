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

app.post('/api/vendor', function(req, res) {
    Vendor.create({
      companyName: req.body.companyName,
      location: req.body.location,
      products: req.body.products,
    }).then(vendor => {
      res.json(vendor)
    });
});