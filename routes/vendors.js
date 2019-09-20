const express   = require('express');
const router    = express.Router();
const Vendor     = require('../models/Vendor');

router.get('/index', (req, res, next)=>{


      res.render('vendors/index')

});

//Populate vendors
// router.get('/show/:id', (req, res, next)=>{

//   let id = req.params.id;
//   Vendor.findById(id).populate('liquors')
//   .then(result =>{
//       res.render('vendors/show', {vendors: result})
//   })
//   .catch((err)=>{
//       next(err);
//   })

// });

// router.get('/new-item', (req, res, next)=>{

//   res.render('vendors/new');

// });

// router.post('/created-item', (req, res, next)=>{

//   let brand = req.body.brand;
//   let type = req.body.type;
//   let description = req.body.description;
//   let size = req.body.size;
//   // let vendor = req.body.vendor;

//   Vendor.create({

//       brand: brand,
//       type: type,
//       description: description,
//       size: size
//       // vendor: vendor
//   })

//   .then(result =>{
//     // Vendor.find()
//     // .then(allVendors => {
//     //   const data = {liquor: result, vendor: allVendors}
//       res.redirect('vendors/index', {result}) //should change to data
//     // })
//   })
//   .catch(err =>{
//     next(err);
//   })
  
// });


// router.post('/delete-item/:id', (req, res, next)=>{

//   let id = req.params.id;

//   Vendor.findByIdAndRemove(id)
//   .then(result=>{
//       res.redirect('vendors/index')
//   })
//   .catch(err=>{
//       next(err)
//   })

// });



module.exports = router;