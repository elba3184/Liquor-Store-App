const express   = require('express');
const router    = express.Router();
const User      = require('../models/User');
const bcrypt    = require('bcryptjs');
const passport  = require('passport');

router.get('/signup', (req, res, next) => {

    res.render('users/signup');

});

router.post('/signup', (req, res, next) => {

  console.log(`hits the post router`)

   
    let admin = false;

    if(req.user) {
      console.log('req.user is called')
      if (req.user.isAdmin) {
        console.log("===.,.,./", req.body.username);
        console.log("dsfsnjfasdkfnasf", req.body.password);
        console.log("asdfsadfas", req.body.role);
        admin = req.body.role ? false : true
      }
    }

    
    let username = req.body.username;
    let password = req.body.password;
    
    const salt  = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    
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
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
}));

// router.post('/logout', (req, res, next)=> {
//   req.logout();
//   res.redirect('/');
// })

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