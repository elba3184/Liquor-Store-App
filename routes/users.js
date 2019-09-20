const express   = require('express');
const router    = express.Router();
const User      = require('../models/User');
const bcrypt    = require('bcryptjs');
const passport  = require('passport');

router.get('/signup', (req, res, next) => {

    res.render('users/signup');

});

router.post('/signup', (req, res, next) => {
  let admin = false;

  console.log('------------', admin)
  console.log(req.body)

  if(req.user){
      // here we check if someone is logged in 
      if(req.user.isAdmin){
          // and if someone if logged in we check if theyre an admin and if so we change the value of the variable to true
          admin = req.body.role? req.body.role : false
          // this is the same as 
          // if(req.body.role){
          //     admin= req.body.role
          // }
          // else{
          //     admin = false
          // }
      }
  }
    
    let username = req.body.username;
    let password = req.body.password;
    
    const salt  = bcrypt.genSaltSync(10);
    const hash  = bcrypt.hashSync(password, salt);
    
    User.create({
      username: username,
      password: hash,
      isAdmin: admin
    })
    .then(()=>{
        res.redirect('/users/login')
    })
    .catch((err)=>{
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

// router.get('/favorites', (req, res, next) => {

//   if (req.session.currentUser) {
//     res.render('users/favorites');
//   } else {
//     res.redirect('/');
//   }

// })

router.get('/profile', (req, res, next)=>{
  res.render('users/profile');
})

router.post('/account/delete-account', (req, res, next)=>{

  User.findByIdAndRemove(req.user._id)
  .then(()=>{
      res.redirect('/')
  })
  .catch((err)=>{
      next(err)
  })

})

module.exports = router;