const mongoose     = require("mongoose");
const Schema       = mongoose.Schema;
const Liquor       = require("../models/Liquor")

const vendorSchema = new Schema ({

    companyName: String,
    location: String,
    products: {type: Schema.Types.ObjectId, ref: 'Liquor'},
    // image: {type: Schema.Types.ObjectId, ref: 'Picture'}

});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;