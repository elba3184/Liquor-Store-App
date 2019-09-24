const express   = require('express');
const router    = express.Router();

const Liquor     = require('../models/Liquor');

router.get('/index', (req, res, next)=>{

  Liquor.find()
  .then(liquor=>{
      res.render('liquor/index', {liquor: liquor})
  })
  .catch(err =>{
      next(err);
  })

});

//Populate vendors
// router.get('/show/:id', (req, res, next)=>{

//   let id = req.params.id;
//   Liquor.findById(id).populate('vendors')
//   .then(something =>{
//       res.render('liquor/show', {something})
//   })
//   .catch((err)=>{
//       next(err);
//   })

// });

router.get('/new-item', (req, res, next)=>{

  res.render('liquor/new');

});

router.post('/created-item', (req, res, next)=>{

  let brand = req.body.brand;
  let type = req.body.type;
  let description = req.body.description;
  let size = req.body.size;
  // let vendor = req.body.vendor;

  Liquor.create({

      brand: brand,
      type: type,
      description: description,
      size: size
      // vendor: vendor
  })

  .then(result =>{
    // Vendor.find()
    // .then(allVendors => {
    //   const data = {liquor: result, vendor: allVendors}
      res.redirect('liquor/index', {result}) //should change to data
    // })
  })
  .catch(err =>{
    next(err);
  })
  
});


router.post('/delete-item/:id', (req, res, next)=>{

  let id = req.params.id;

  Liquor.findByIdAndRemove(id)
  .then(result=>{
      res.redirect('liquor/index')
  })
  .catch(err=>{
      next(err)
  })

});


router.get('/edit-item/:id', (req, res, next)=>{

  let id = req.params.id;

  Liquor.findById(id)
  // .populate('vendors')
  .then(liquor =>{
    console.log('===>', liquor)
  // Vendor.find()
  // .then(allVendors => {
    const data = {
      liquor: liquor
      // vendors: allVendors
    }  
    res.render('liquor/edit', {data});
  //  })
  })
  .catch(err=>{
      next(err)
  })

});

router.post('/update-item/:id', (req, res, next)=>{

  let id = req.params.id;

  Liquor.findByIdAndUpdate(id, {
      brand: req.body.brand,
      type: req.body.type,
      description: req.body.description,
      size: req.body.size
      // vendor: req.body.vendor
  })
  .then(result=>{
      res.redirect('liquor/show/'+id)
  })
  .catch((err)=>{
      next(err);
  })

});


module.exports = router;