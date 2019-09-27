const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');

router.get('/signup', (req, res, next) => {

  res.render('users/signup');

});

router.post('/signup', (req, res, next) => {

  let username = req.body.username;
  let password = req.body.password;
  let role = req.body.role;

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);


  User.create({
      username: username,
      password: hash,
      role: role
    })
    .then(() => {

      res.redirect('/users/login')
    })
    .catch((err) => {
      next(err)
    })
});

router.get('/login', (req, res, next) => {

  res.render('users/login');

});


router.post("/login", passport.authenticate("local", {

  successRedirect: "/",
  failureRedirect: "/users/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.get('/logout', (req, res, next) => {

  req.session.destroy();
  res.redirect('/');

});

router.get('/profile', (req, res, next) => {
  res.render('users/profile');
})

router.post('/account/delete-account', (req, res, next) => {

  User.findByIdAndRemove(req.user._id)
    .then(() => {
      res.redirect('/')
    })
    .catch((err) => {
      next(err)
    })

})

module.exports = router;