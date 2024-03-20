import database from "./db/db.js";
import productModel from "./models/product.js";
import productJson from "./product.json" assert { type: 'json' };

const start = async () => {
  try {
    await database();
    await productModel.deleteMany({});
    await productModel.create(productJson);
    console.log("start server");
  } catch (err) {
    console.log(err);
  }
};
start();
