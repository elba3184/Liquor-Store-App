const express = require('express');
const router = express.Router();
const Vendors = require('../models/Vendor');
const Liquor = require('../models/Liquor');


router.get('/index', (req, res, next) => {

  Vendors.find()
    .then(vendors => {

      // console.log('==>>_>_>_>_>___++++>>>>', vendors);
      res.render('vendors/index', {
        vendors: vendors
      })
    })
    .catch(err => {
      next(err);
    })

});

//Populate vendors
router.get('/show/:id', (req, res, next) => {

  let id = req.params.id;
  console.log(id)
  Vendors.findById(id).populate('products')
    .then(theVendor => {
      console.log(theVendor)
      console.log('==>>_>_>_>_>___++++>>>>', theVendor.products);
      // console.log(">>>>>the vendor<<<<<<", theVendor.products[0].brand)
      res.render('vendors/show', {
        vendors: theVendor
      })
    })
    .catch((err) => {
      next(err);
    })

});

router.get('/new-vendor', (req, res, next) => {
  res.render('vendors/new');
});

router.get('/liquor-vendors', async (req, res, next) => {
  try {
    let vendors = await Vendors.find().populate('products')
    console.log(vendors)
    res.json(vendors.products)
  } catch (err) {
    next(err)
  }
})

router.post('/created-vendor', (req, res, next) => {



  // Vendors.findById(id).populate('products')

  let name = req.body.name;
  let location = req.body.location;
  let products = req.body.products;

  Vendors.create({
      name: name,
      location: location,
      products: products
    })

    .then(result => {
      Liquor.find()
        .then(allLiquor => {
          const data = {
            vendor: result,
            products: allLiquor
          }
          // console.log('===VENDORS DATA====lfsdflsdfls===', data)
          console.log("iddddd ,", products)
          res.redirect('vendors/index', {
            data
          }) //should change to data
        })
    })
    .catch(err => {
      next(err);
    })

});


router.post('/delete-vendor/:id', (req, res, next) => {

  let id = req.params.id;

  Vendors.findById(id).populate('products')
    .then(vendors => {
      console.log('Vendors in delete ===>', vendors)
      Liquor.find()
        .then(allLiquor => {
          const data = {
            vendors: vendors,
            liquor: allLiquor
          }
          console.log("=lsdfsdfs liquor", data);

          res.render('vendors/edit', {
            data
          });
        })
    })
    .catch(err => {
      next(err)
    })

});

router.post('/update-item/:id', (req, res, next) => {

  let id = req.params.id;

  Vendors.findByIdAndUpdate(id, {
      name: req.body.name,
      location: req.body.location,
      products: req.body.products,
    })
    .then(result => {
      res.redirect('vendors/show/' + id)
    })
    .catch((err) => {
      next(err);
    })

});

module.exports = router;