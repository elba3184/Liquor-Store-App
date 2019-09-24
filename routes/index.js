const express = require('express');
const router  = express.Router();
// const multer  = require('multer');
// const Picture = require('../models/Picture');
// const upload = multer({ dest: './public/uploads/' });
const Liquor = require('../models/Liquor');

/* GET home page */
// router.get('/', (req, res, next) => {

//   res.render('index');
// });

router.get('/', (req, res, next)=>{

  Liquor.find()
  .then(allLiquor=>{
    console.log("==============>", allLiquor);
      res.render('index', {liquor: allLiquor})
  })
  .catch((err)=>{
      next(err);
  })

});





// Route to upload from project base path

/* GET home page. */
// router.get('/', function(req, res, next) {
//   Picture.find((err, pictures) => {
//     res.render('index', {pictures})
//   })
// });
// router.post('/upload', upload.single('photo'), (req, res) => {

//   const pic = new Picture({
//     name: req.body.name,
//     path: `/uploads/${req.file.filename}`,
//     originalName: req.file.originalname
//   });

//   pic.save((err) => {
//       res.redirect('/');
//   });
// });




module.exports = router;
