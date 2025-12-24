import {Schema,Models,model, models} from "mongoose";


const ratingSchema = new Schema(
    {
      rate: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
      },
      count: {
        type: Number,
        required: true,
        min: 0,
      },
    },
    { _id: false }
  );

const ProductSchema=new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
      },
      price: {
        type: Number,
        required: true,
        min: 0,
      },
      description: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
        index: true,
      },
      image: {
        type: String,
        required: true,
      },
      rating: ratingSchema,
},{timestamps:true});

const Product=models.Product || model("Product",ProductSchema);
export default Product;