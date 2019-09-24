const mongoose   = require("mongoose");
const Schema     = mongoose.Schema;

const cartSchema = new Schema ({

    items: [{type: Schema.Type.ObjectId, ref: "Liquor"}],
    image: {type: Schema.Type.ObjectId, ref: "Picture"}
 
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;