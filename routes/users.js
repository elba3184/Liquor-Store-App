const express   = require('express');
const router    = express.Router();
const User      = require('../models/User');
const bcrypt    = require('bcryptjs');
const passport  = require('passport');

router.get('/signup', (req, res, next) => {

    res.render('users/signup');

});

router.post('/signup', (req, res, next) => {

    let isAdmin = false;
    let isEmployee = false;
    let isVendor = false;
  if(req.user){
   
      // here we check if someone is logged in 
      if(req.user.isAdmin){
          // and if someone if logged in we check if theyre an admin and if so we change the value of the variable to true
          // admin = req.body.role ? req.body.role : false
          // this is the same as 
          if(req.body.role === "Adminstrator") {
            isAdmin = true;
          } else if(req.body.role === "Employee" ) {
            isEmployee = true;
          } else if( req.body.role === "Vendor"){
            isVendor = true;
      }
      }  
    
  }

  console.log(isAdmin, isEmployee, isVendor)
    
    let username = req.body.username;
    let password = req.body.password;
    let role = req.body.role;

    const salt  = bcrypt.genSaltSync(10);
    const hash  = bcrypt.hashSync(password, salt);

  
    User.create({
      username: username,
      password: hash,
      role: role
    })
    .then(()=>{
   
        res.redirect('/users/login')
    })
    .catch((err)=>{
        next(err)
    })
});

router.get('/login', (req, res, next) => {
  // console.log("zeee user ===.===.===.=.=.====.=",theUser)
  // console.log("is admin? ====>", req.user.username, req.user.password, req.user.role);
  // console.log('In login', {username: username, pass: password, role: role})

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

// router.get('/findbybarcode/:barcode', (req, res, next)=>{
//   console.log(req.params.barcode)
//   Liquor.find({barcode: req.params.barcode})
//   .then(foundLiquor => {
//     console.log(foundLiquor)
//     // res.send(foundLiquor)
//     res.render(foundLiquor)
//   })
// })

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