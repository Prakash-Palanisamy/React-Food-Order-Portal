const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


mongoose.connect('mongodb://localhost:27017/capstone-project-2', { useNewUrlParser: true , useUnifiedTopology: true }, () =>
{
    console.log("Sever connected check localhost:5000");
})

const productsSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: String,
    description: String,
});


const Products = mongoose.model("products", productsSchema);
const CartItem = mongoose.model("cartItems", productsSchema);

const app = express();
app.use(cors());
app.use(express.json());


  app.get("/products/getAll", async (req, res) => {
    const allProducts = await Products.find({})
    res.json({
      allProducts
    });
  }); 
  
  app.get("/cartproducts/getAll", async (req, res) => {
    const cartProducts = await CartItem.find({})
    res.json({
      cartProducts
    });
  }); 

  app.delete("/cart/deleteItem/:id", async (req,res) => {
    const id =req.params.id;
    await CartItem.findByIdAndRemove(id).exec();
    res.send({result: 'Item deleted successfully'});
  });


  app.delete("/cart/deleteAll", async (req,res) => {
    await CartItem.remove({});
    res.send({result: 'All Items deleted successfully'});
  });
  

  app.post("/cart/add", async (req, res) =>{
    const cartItem = new CartItem ({
      name: req.body.name,
      image:req.body.image,
      price:req.body.price,
      description:req.body.description,
    })
   try{
      const data= await cartItem.save()
      res.json(data)
   }catch(err){
     res.send('Error')
   }
  });


  

const db = mongoose.connection;

db.once("open", () => {
  app.listen(5000);
});