const express = require('express');
const router = express.Router();
const Liquor = require('../models/Liquor');
const Vendors = require('../models/Vendor');

router.get('/index', (req, res, next) => {

  Liquor.find()
    .populate("vendor")
    .then(allLiquor => {
      console.log("in index ---> All the liquor", allLiquor);

      res.render('liquor/index', {
        liquor: allLiquor
      })
    })
    .catch(err => {
      next(err);
    })

});

//Populate vendors
router.get('/show/:id', (req, res, next) => {

  let id = req.params._id;
  Liquor.find(id).populate('vendor')
    .then(item => {
      console.log(item)
      res.render('liquor/show', {
        liquor: item
      })
    })
    .catch((err) => {
      next(err);
    })

});

router.get('/new-item', (req, res, next) => {

  res.render('liquor/new');

});

router.post('/created-item', (req, res, next) => {

  let brand = req.body.brand;
  let type = req.body.type;
  let description = req.body.description;
  let size = req.body.size;
  let vendor = req.vendor._id;

  Liquor.create({

      brand: brand,
      type: type,
      description: description,
      size: size,
      vendor: vendor
    })

    .then(result => {
      Vendors.find()
        .then(allVendors => {
          console.log(allVendors)
          res.redirect('/liquor/index')
        })
    })
    .catch(err => {
      next(err);
    })

});


router.post('/delete-item/:id', (req, res, next) => {

  let id = req.params.id;

  Liquor.findByIdAndRemove(id)
    .then(result => {
      res.redirect('/liquor/index')
    })
    .catch(err => {
      next(err)
    })

});


router.get('/edit-item/:id', (req, res, next) => {

  let id = req.params.id;

  Liquor.findById(id).populate('vendor')
    .then(liquor => {
      Vendors.find()
        .then(allVendors => {
          allVendors.forEach(eachVendor => {
            if (eachVendor._id.equals(liquor.vendor)) {
              eachVendor.isTheVendor = true;
            }
          })

          res.render('liquor/edit', {
            liquor: liquor,
            vendors: allVendors
          });
        })
    })
    .catch(err => {
      next(err)
    })

});

router.post('/update-item/:id', (req, res, next) => {

  let id = req.params.id;

  Liquor.findByIdAndUpdate(id, {
      brand: req.body.brand,
      type: req.body.type,
      description: req.body.description,
      size: req.body.size,
      vendor: req.body.vendor
    })
    .then(result => {
      res.redirect('/liquor/show/' + id)
    })
    .catch((err) => {
      next(err);
    })

});

router.get('/findbybarcode/:barcode', (req, res, next) => {
  console.log(req.params.barcode)
  Liquor.find({
      barcode: req.params.barcode
    })
    .then(foundLiquor => {
      console.log(foundLiquor)
      res.send(foundLiquor)
    })
})

module.exports = router;



// router.get('/findbybarcode/:barcode', (req, res, next)=>{
//   console.log(req.params.barcode)
//   Liquor.find({barcode: req.params.barcode})
//   .then(foundLiquor => {
//     res.render('barcode', {foundLiquor})
//   })
// })