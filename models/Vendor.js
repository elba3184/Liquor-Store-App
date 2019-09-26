const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vendorSchema = new Schema({
    companyName: String,
    location: String,
}, {
    toJSON: {
        virtuals: true
    }
});
//grab virtual - can be anything
vendorSchema.virtual('products', {
    ref: 'Liquor',
    localField: '_id',
    foreignField: 'vendor',
    justOne: false
})
//middleware - current Obj 
function autopopulate(next) {
    this.populate([
        { path: 'products' }
    ])
    next();
}

vendorSchema.set('toObject', { virtuals: true })
vendorSchema.set('toJSON', { virtuals: true })
vendorSchema.pre('find', autopopulate); //runs before find and autopopulates 
vendorSchema.pre('findOne', autopopulate);

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;