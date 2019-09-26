const express    = require('express');
const router     = express.Router();
const Liquor     = require('../models/Liquor');
const Vendors     = require('../models/Vendor');


 

router.get('/index', (req, res, next)=>{
    
   Liquor.find()
  .populate("vendor")
  .then(allLiquor=>{
      console.log("in index ---> All the liquor",allLiquor);
      
      res.render('liquor/index', {liquor: allLiquor})
  })
  .catch(err =>{
      next(err);
  })

});

//   res.render('liquor/index')

// })

// .catch((err)=>{
// next(err);
// });
// });







//Populate vendors
router.get('/show/:barcode', (req, res, next)=>{

  let barcode = req.params.barcode;
  Liquor.find({barcode: req.params.barcode}).populate('vendor')
  .then(item =>{
    console.log(item)
      res.render('liquor/show', {liquor: item})
  })
  .catch((err)=>{
      next(err);
  })

});

router.get('/new-item', (req, res, next)=>{

  res.render('liquor/new');

});

router.post('/created-item', (req, res, next)=>{

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

  .then(result =>{
    Vendors.find()
    .then(allVendors => {
      console.log(allVendors)
      // const data = {liquor: result, vendors: allVendors}
      // console.log('=LIQUOR DATA===lfsdflsdfls===', data)
      res.redirect('/liquor/index') //should change to data
    })
  })
  .catch(err =>{
    next(err);
  })
  
});


router.post('/delete-item/:id', (req, res, next)=>{

  let id = req.params.id;

  Liquor.findByIdAndRemove(id)
  .then(result=>{
      res.redirect('/liquor/index')
  })
  .catch(err=>{
      next(err)
  })

});


router.get('/edit-item/:id', (req, res, next)=>{

  let id = req.params.id;

  Liquor.findById(id).populate('vendor')
  .then(liquor =>{
    // console.log('Liquor in delete===>', liquor)
  Vendors.find()
  .then(allVendors => {
    // const data = {
    //   liquor: liquor,
    //   vendor: allVendors
    // }  
    // console.log("=lsdfsdfs======",data);
    allVendors.forEach(eachVendor => {
      if (eachVendor._id.equals(liquor.vendor)) {
        eachVendor.isTheVendor = true;
      }
    })
    
    res.render('liquor/edit', {liquor: liquor, vendors: allVendors});
   })
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
      size: req.body.size,
      vendor: req.body.vendor
  })
  .then(result=>{
      res.redirect('/liquor/show/'+id)
  })
  .catch((err)=>{
      next(err);
  })

});

router.get('/findbybarcode/:barcode', (req, res, next)=>{
  console.log(req.params.barcode)
  Liquor.find({barcode: req.params.barcode})
  .then(foundLiquor => {
    console.log(foundLiquor)
    res.send(foundLiquor)
  })
})

module.exports = router;


 // Liquor.find()
  // .populate("vendor")
  // .then(allLiquor=>{
  //     console.log("in index ---> All the liquor",allLiquor);
      
  //     res.render('liquor/index', {liquor: allLiquor})
  // })
  // .catch(err =>{
  //     next(err);
  // })

// });





// console.log("=====DFGNFJDGDFJGDSFG", req.user)
  // console.log(req.session)
  // if(!req.user){
    //     req.flash('error', "please login to view book selection")
    //     res.redirect('/login');
    // }

        // if(req.session.counter){
        //     req.session.counter++;
        // }else{
        //     req.session.counter = 1;
        // }
        // this is a useless example of how oyu can edit the session whenever/however you want

        // Vendors.find()
        // .then((allVendors)=>{
    
        // Liquor.find()
        // .then((allLiquor)=>{
    
    
    
    
            // allLiquor.forEach((eachItem)=>{
    
            //     if(req.user){
       
            //         if(eachItem.vendor.equals(req.vendor._id) || req.user.role.equals("Vendor")){
            //             eachItem.mine = true;
            //             // now we are attaching a .mine key to all the books who have a creator equal to currently logged in user's ID
            //             // and also, if currently logged in user isAdmin, were attaching it to all of them
            //         }
            //     }
            // })