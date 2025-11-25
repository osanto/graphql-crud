import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    soldout: String,
    inventory: Number,
    stores: Array,
});

const Products = mongoose.model('Products', productSchema);

export { Products };
