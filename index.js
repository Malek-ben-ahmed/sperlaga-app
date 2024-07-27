import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9020;
const MONGO_URL = process.env.MONGO_URL;
app.use(cors());
app.use(express.json());
/*const { ObjectId } = require('mongodb');
const dbName = 'db';*/

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database is connecting successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log("Error: ", error));

const { Schema } = mongoose;

const produitSchema = new Schema({
  SAP: String,
  Quantity: String,
  Price: String,
  Emplacement: String,
  Designation: String,
  Supplier: String,
  Date: String,
  Problem:String,
});


// Modèle Mongoose pour la collection 'Produit'
const Produit = mongoose.model('Produit', produitSchema, 'Produit');


app.get("/api/Produit", async (req, res) => {
  const sap = req.query.sap;
  try {
    let produitData;
    if (sap) {
      produitData = await Produit.find({ SAP: sap });
    } else {
      produitData = await Produit.find();
    }
    res.json(produitData);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});
// Route POST pour ajouter des données à la collection 'Produit'
app.post("/api/Produit", async (req, res) => {
  const newProduit = req.body;

  console.log('Received new product data:', newProduit); // Log the received data

  try {
    const createdProduit = await Produit.create(newProduit);
    res.status(201).json(createdProduit);
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).send("Error saving data");
  }
});

app.delete('/api/Produit/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deletedData = await Produit.findByIdAndDelete(id);
    if (!deletedData) {
      return res.status(404).json({ error: 'Data not found' });
    }
    res.json({ message: 'Data deleted successfully' });
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


export default Produit;
