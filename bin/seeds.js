require('dotenv').config();
const mongoose = require('mongoose');
const Liquor   = require('../models/Liquor');
const Vendor   = require('../models/Vendor');


mongoose
  .connect(`${process.env.MONGODB_URI}`, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let id1 = mongoose.Types.ObjectId();
let id2 = mongoose.Types.ObjectId();
let id3 = mongoose.Types.ObjectId();
let id4 = mongoose.Types.ObjectId();
let id5 = mongoose.Types.ObjectId();



let vendor = [
    {
      companyName: "Central Liquor",
      location: "Around 1",
      _id: id1
      // products: mongoose.Types.ObjectId("5d8cd8189ae9a1712e1fc12e")
    },
    {
      companyName: "Liquor ForLife",
      location: "Around 2",
      _id: id2
      // products: mongoose.Types.ObjectId("5d8cc414312b534532bbd2cf")
    },
    {
      companyName: "Awesome Wine",
      location: "Around 3",
      _id: id3
      // products: ["Barefoot"]
    },
    {
      companyName: "Superstar Liquors",
      location: "Around 4",
      _id: id4
      // products: ["Barefoot"]
    },
    {
      companyName: "Payne Liquor",
      location: "Around 5",
      _id: id5
      // products: ["Barefoot"]
    }
]

Vendor.create(vendor);

let liquor = [
    {
      barcode: 8200019312,
      brand: "1800",
      description: "Añejo",
      type: "Tequila",
      size: ".375L",
      caseQuantity: 12,
      price: 15.99,
      cost: 13,
      quantity: 4,
      vendor: id1
    },
    {
      barcode: 81153801023,
      brand: "1800",
      description: "Añejo",
      type: "Tequila",
      size: ".750L",
      caseQuantity: 12,
      price: 28.99,
      cost: 22,
      quantity: 6,
      vendor: id2
    },
    {
      barcode: 8200019314,
      brand: "1800",
      description: "Reposado",
      type: "Tequila",
      size: ".375L",
      caseQuantity: 12,
      price: 15.99,
      cost: 13.5,
      quantity: 4,
      vendor: id3
    },
    {
      barcode: 81153801022,
      brand: "1800",
      description: "Reposado",
      type: "Tequila",
      size: ".750L",
      caseQuantity: 12,
      price: 27.99,
      cost: 22,
      quantity: 6,
      vendor: id4
    }
    // },
    // {
    //   barcode: 811538010122,
    //   brand: "1800",
    //   description: "Silver",
    //   type: "Tequila",
    //   size: ".375L",
    //   caseQuantity: 12,
    //   price: 16.99,
    //   cost: 12,
    //   quantity: 1,
    //   vendor: id1
    // },
    // {
    //   barcode: 811538010139,
    //   brand: "1800",
    //   description: "Silver",
    //   type: "Tequila",
    //   size: ".750L",
    //   caseQuantity: 12,
    //   price: 26.99,
    //   cost: 22.5,
    //   quantity: 7,
    //   vendor: id1
    // },
    // {
    //   barcode: 835229000001,
    //   brand: "Absolut 80",
    //   description: "Sweden",
    //   type: "Vodka",
    //   size: ".375L",
    //   caseQuantity: 120,
    //   price: 7.99,
    //   cost: 2.5,
    //   quantity: 8,
    //   vendor: id2
    // },
    // {
    //   barcode: 835229000209,
    //   brand: "Absolut 80",
    //   description: "Sweden",
    //   type: "Vodka",
    //   size: ".750L",
    //   caseQuantity: 24,
    //   price: 14.99,
    //   cost: 9,
    //   quantity: 10,
    //   vendor: id2
    // },
    // {
    //   barcode: 871710,
    //   brand: "Absolut 80",
    //   description: "Sweden",
    //   type: "Vodka",
    //   size: "1.0L",
    //   caseQuantity: 12,
    //   price: 24,
    //   cost: 20,
    //   quantity: 3,
    //   vendor: id2
    // },
    // {
    //   barcode: 835229000605,
    //   brand: "Absolut 80",
    //   description: "Sweden",
    //   type: "Vodka",
    //   size: "1.75L",
    //   caseQuantity: 6,
    //   price: 29,
    //   cost: 26.5,
    //   quantity: 2,
    //   vendor: id2
    // },
    // {
    //   barcode: 84692153015,
    //   brand: "Alize",
    //   description: "Gold Passion",
    //   type: "Liquor",
    //   size: ".750L",
    //   caseQuantity: 12,
    //   price: 18.99,
    //   cost: 13.75,
    //   quantity: 7,
    //   vendor: id5
    // },
    // {
    //   barcode: 84692200948,
    //   brand: "Alize",
    //   description: "Red Passion",
    //   type: "Liquor",
    //   size: ".750L",
    //   caseQuantity: 6,
    //   price: 19.99,
    //   cost: 13.75,
    //   quantity: 6,
    //   vendor: id5
    // },
    // {
    //   barcode: 84692201143,
    //   brand: "Alize",
    //   description: "Blue Passion",
    //   type: "Liquor",
    //   size: ".750L",
    //   caseQuantity: 6,
    //   price: 19.99,
    //   cost: 13.75,
    //   quantity: 8,
    //   vendor: id5
    // },
    // {
    //   barcode: 84692204045,
    //   brand: "Alize",
    //   description: "Wild Passion",
    //   type: "Liquor",
    //   size: ".750L",
    //   caseQuantity: 12,
    //   price: 19.99,
    //   cost: 13.75,
    //   quantity: 8,
    //   vendor: id5
    // },
    // {
    //   barcode: 63619100391,
    //   brand: "Appleton Estate",
    //   description: "Reserve",
    //   type: "Rum",
    //   size: ".375L",
    //   caseQuantity: 6,
    //   price: 8.99,
    //   cost: 6.5,
    //   quantity: 4,
    //   vendor: id3
    // },
    // {
    //   barcode: 721059001038,
    //   brand: "Appleton Estate",
    //   description: "Rare Blend - 12 years",
    //   type: "Rum",
    //   size: ".750L",
    //   caseQuantity: 6,
    //   price: 21.99,
    //   cost: 29,
    //   quantity: 5,
    //   vendor: id3
    // },
    // {
    //   barcode: 86767210098,
    //   brand: "Bailey’s",
    //   description: "Irish Cream",
    //   type: "Liquor-Cream",
    //   size: ".375L",
    //   caseQuantity: 11,
    //   price: 8.99,
    //   cost: 5.5,
    //   quantity: 6,
    //   vendor: id5
    // },
    // {
    //   barcode: 8676721034,
    //   brand: "Bailey’s",
    //   description: "Irish Cream",
    //   type: "Liquor-Cream",
    //   size: ".750L",
    //   caseQuantity: 12,
    //   price: 15.99,
    //   cost: 11,
    //   quantity: 2,
    //   vendor: id5
    // },
    // {
    //   barcode: 85000018491,
    //   brand: "Barefoot",
    //   description: "Cabernet Sauvignon",
    //   type: "Wine",
    //   size: ".750L",
    //   caseQuantity: 12,
    //   price: 6.99,
    //   cost: 4,
    //   quantity: 10,
    //   vendor: id3
    // },
    // {
    //   barcode: 85000016046,
    //   brand: "Barefoot",
    //   description: "Pinot Grigio",
    //   type: "Wine",
    //   size: ".750L",
    //   caseQuantity: 12,
    //   price: 8.99,
    //   cost: 6.5,
    //   quantity: 13,
    //   vendor: id3
    // },
    // {
    //   barcode: 85000014448,
    //   brand: "Barefoot",
    //   description: "Merlot",
    //   type: "Wine",
    //   size: ".750L",
    //   caseQuantity: 12,
    //   price: 8.99,
    //   cost: 6,
    //   quantity: 12,
    //   vendor: id3
    // },
    // {
    //   barcode: 85000018682,
    //   brand: "Barefoot",
    //   description: "Pinot Noir",
    //   type: "Wine",
    //   size: ".750L",
    //   caseQuantity: 6,
    //   price: 13.99,
    //   cost: 9.99,
    //   quantity: 11,
    //   vendor: id3
    // },
    // {
    //   barcode: 18341751017,
    //   brand: "Barefoot",
    //   description: "Pink Moscato",
    //   type: "Wine",
    //   size: ".750L",
    //   caseQuantity: 12,
    //   price: 8.99,
    //   cost: 6,
    //   quantity: 7,
    //   vendor: id3
    // },
    // {
    //   barcode: 80480300005,
    //   brand: "Bombay Gin",
    //   description: "England",
    //   type: "Gin",
    //   size: ".750L",
    //   caseQuantity: 6,
    //   price: 39.99,
    //   cost: 29.75,
    //   quantity: 7,
    //   vendor: id4
    // },
    // {
    //   barcode: 8144010331,
    //   brand: "Bombay Gin",
    //   description: "England",
    //   type: "Gin",
    //   size: "1.75L",
    //   caseQuantity: 12,
    //   price: 20,
    //   cost: 15,
    //   quantity: 6,
    //   vendor: id4
    // },
    // {
    //   barcode: 87000201781,
    //   brand: "Captain Morgan",
    //   description: "Private Stock",
    //   type: "Rum",
    //   size: ".750L",
    //   caseQuantity: 3,
    //   price: 23.99,
    //   cost: 17,
    //   quantity: 1,
    //   vendor: id3
    // },
    // {
    //   barcode: 8700020148,
    //   brand: "Captain Morgan",
    //   description: "Silver",
    //   type: "Rum",
    //   size: ".750L",
    //   caseQuantity: 6,
    //   price: 21.99,
    //   cost: 15.75,
    //   quantity: 3,
    //   vendor: id3
    // },
    // {
    //   barcode: 873340,
    //   brand: "Captain Morgan",
    //   description: "Silver",
    //   type: "Rum",
    //   size: "1.75L",
    //   caseQuantity: 12,
    //   price: 25.99,
    //   cost: 19,
    //   quantity: 0,
    //   vendor: id3
    // },
    // {
    //   barcode: 8727309,
    //   brand: "Captain Morgan",
    //   description: "Spiced",
    //   type: "Rum",
    //   size: ".750L",
    //   caseQuantity: 48,
    //   price: 22.99,
    //   cost: 18,
    //   quantity: 12,
    //   vendor: id3
    // },
    // {
    //   barcode: 8727707,
    //   brand: "Captain Morgan",
    //   description: "Spiced",
    //   type: "Rum",
    //   size: "1.75L",
    //   caseQuantity: 24,
    //   price: 27.99,
    //   cost: 19,
    //   quantity: 12,
    //   vendor: id3
    // },
    // {
    //   barcode: 80432400463,
    //   brand: "Chivas Regal",
    //   description: "12 years",
    //   type: "Whiskey-Scotch",
    //   size: ".375L",
    //   caseQuantity: 6,
    //   price: 14,
    //   cost: 8,
    //   quantity: 2,
    //   vendor: id2
    // },
    // {
    //   barcode: 80432400364,
    //   brand: "Chivas Regal",
    //   description: "12 years",
    //   type: "Whiskey-Scotch",
    //   size: ".750L",
    //   caseQuantity: 24,
    //   price: 35,
    //   cost: 29,
    //   quantity: 16,
    //   vendor: id2
    // },
    // {
    //   barcode: 80432400340,
    //   brand: "Chivas Regal",
    //   description: "Scotch",
    //   type: "Whiskey-Scotch",
    //   size: "1.75L",
    //   caseQuantity: 24,
    //   price: 45.99,
    //   cost: 39,
    //   quantity: 3,
    //   vendor: id2
    // },
    // {
    //   barcode: 8772503,
    //   brand: "Crown Royal",
    //   description: "Canadian",
    //   type: "Whiskey-Canadian",
    //   size: ".750L",
    //   caseQuantity: 12,
    //   price: 25.99,
    //   cost: 20.6,
    //   quantity: 9,
    //   vendor: id4
    // },
    // {
    //   barcode: 82000756224,
    //   brand: "Crown Royal",
    //   description: "Black",
    //   type: "Whiskey-Canadian",
    //   size: ".750L",
    //   caseQuantity: 48,
    //   price: 25.99,
    //   cost: 17.99,
    //   quantity: 10,
    //   vendor: id4
    // },
    // {
    //   barcode: 82000771555,
    //   brand: "Crown Royal",
    //   description: "Apple",
    //   type: "Whiskey-Canadian",
    //   size: ".750L",
    //   caseQuantity: 12,
    //   price: 25.99,
    //   cost: 17.99,
    //   quantity: 10,
    //   vendor: id4
    // },
    // {
    //   barcode: 82000773375,
    //   brand: "Crown Royal",
    //   description: "Rye",
    //   type: "Whiskey-Canadian",
    //   size: ".750L",
    //   caseQuantity: 6,
    //   price: 25.99,
    //   cost: 17.99,
    //   quantity: 10,
    //   vendor: id4
    // },
    // {
    //   barcode: 82000774808,
    //   brand: "Crown Royal",
    //   description: "Honey",
    //   type: "Whiskey-Canadian",
    //   size: ".750L",
    //   caseQuantity: 12,
    //   price: 25.99,
    //   cost: 17.99,
    //   quantity: 10,
    //   vendor: id4
    // },
    // {
    //   barcode: 82000776598,
    //   brand: "Crown Royal",
    //   description: "Vanilla",
    //   type: "Whiskey-Canadian",
    //   size: ".750L",
    //   caseQuantity: 3,
    //   price: 25.99,
    //   cost: 17.99,
    //   quantity: 10,
    //   vendor: id4
    // },
    // {
    //   barcode: 88004144739,
    //   brand: "Fireball",
    //   description: "Cinnamon Whiskey",
    //   type: "Whiskey-American",
    //   size: ".200L",
    //   caseQuantity: 48,
    //   price: 3.5,
    //   cost: 2,
    //   quantity: 12,
    //   vendor: id4
    // },
    // {
    //   barcode: 88004146689,
    //   brand: "Fireball",
    //   description: "Cinnamon Whiskey",
    //   type: "Whiskey-American",
    //   size: ".750L",
    //   caseQuantity: 12,
    //   price: 14.99,
    //   cost: 11.99,
    //   quantity: 6,
    //   vendor: id4
    // },
    // {
    //   barcode: 88004009281,
    //   brand: "Fireball",
    //   description: "Cinnamon Whiskey",
    //   type: "Whiskey-American",
    //   size: "1.75L",
    //   caseQuantity: 6,
    //   price: 22.99,
    //   cost: 18.5,
    //   quantity: 3,
    //   vendor: id4
    // },
    // {
    //   barcode: 26964177190,
    //   brand: "Flor De Caña",
    //   description: "Gold - 4 years",
    //   type: "Rum",
    //   size: ".750L",
    //   caseQuantity: 12,
    //   price: 14.99,
    //   cost: 11.25,
    //   quantity: 0,
    //   vendor: id3
    // },
    // {
    //   barcode: 26964904291,
    //   brand: "Flor De Caña",
    //   description: "Extra Dry - 4 years",
    //   type: "Rum",
    //   size: ".750L",
    //   caseQuantity: 12,
    //   price: 14.99,
    //   cost: 11.4785,
    //   quantity: 14,
    //   vendor: id3
    // },
    // {
    //   barcode: 26964852745,
    //   brand: "Flor De Caña",
    //   description: "Grand Reserve - 7 years",
    //   type: "Rum",
    //   size: ".750L",
    //   caseQuantity: 12,
    //   price: 22.99,
    //   cost: 17.8416,
    //   quantity: 4,
    //   vendor: id3
    // },
    // {
    //   barcode: 80432400722,
    //   brand: "Glenlivet",
    //   description: "12 years - Single Malt",
    //   type: "Whiskey-Scotch",
    //   size: "1.75L",
    //   caseQuantity: 6,
    //   price: 79.99,
    //   cost: 67.0357,
    //   quantity: 1,
    //   vendor: id2
    // },
    // {
    //   barcode: 80432400630,
    //   brand: "Glenlivet",
    //   description: "12 years - Single Malt",
    //   type: "Whiskey-Scotch",
    //   size: ".750L",
    //   caseQuantity: 12,
    //   price: 38.99,
    //   cost: 32.0365,
    //   quantity: 4,
    //   vendor: id2
    // },
    // {
    //   barcode: 8043210152,
    //   brand: "Glenlivet",
    //   description: "Cellar Collect 1972",
    //   type: "Whiskey-Scotch",
    //   size: ".750L",
    //   caseQuantity: 3,
    //   price: 799.99,
    //   cost: 600,
    //   quantity: 0,
    //   vendor: id2
    // },
    // {
    //   barcode: 80432400722,
    //   brand: "Glenlivet",
    //   description: "12 YEARS",
    //   type: "Whiskey-Scotch",
    //   size: "1.75L",
    //   caseQuantity: 6,
    //   price: 79.99,
    //   cost: 67.0357,
    //   quantity: 1,
    //   vendor: id2
    // }
  ]

Liquor.create(liquor);

setTimeout(() => {

  throw "Errorrrrr"
}, 4000)
// Liquor.create(liquor => {
//   Vendor.create(vendor=> {
//     console.log("Seeding successful!");
//     mongoose.connection.close();
//   })
// });

// module.exports = liquor;
// module.exports = vendor;


// Liquor.create(liquor => {
//   Vendor.create(vendor=> {
//     console.log("This is the create method")

//     console.log("Seeding successful!")
    
//   })
 
// });

// module.exports = liquor;