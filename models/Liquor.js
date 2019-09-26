const mongoose     = require("mongoose");
const Schema       = mongoose.Schema;

const liquorSchema = new Schema ({
    barcode: Number,
    brand: String,
    type: String,
    vendor: {type: Schema.Types.ObjectId, ref: 'Vendor'},
    description: String,
    size: String,
    quantity: Number, // if 0, conditionally render out of stock
    cost: Number,
    price: Number
    // image: {type: Schema.Types.ObjectId, ref: 'Picture'}

});

const Liquor = mongoose.model('Liquor', liquorSchema);

module.exports = Liquor;