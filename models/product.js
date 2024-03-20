
import mongoose from "mongoose";

const ProductSchema=new mongoose.Schema({
      name:{
              type:String,
              required:true,
      },
      price:{
              type:Number,
              required:true,
      },
      feature:{
              type:Boolean,
              default:false,
      },
      rating:{
              type:Number,
              default:4.9
      },
      createAt:{
              type:Date,
              default:Date.now()
      },
      company:{
              type:String,
              enum:{
                            values:["apple","samsung","mi","dell"],
                            message:"Value is not suported"
              }
      }
})

const productModel=mongoose.model('Product',ProductSchema);

export default productModel;