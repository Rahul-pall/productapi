import express, { json } from "express";
import productRoute from "./routes/Products.js";
import database from "./db/db.js";
const app = express();

const PORT = process.env.PORT || 3000;
app.use("/api/products", productRoute); 
app.get("/", function (req, res) {
  res.send("hello api server run");
});

const start = async () => {
  try {
    database();
    app.listen(PORT, function () {
      console.log(`http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
