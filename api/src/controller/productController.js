import  { createProduct, deleteProduct, updateProduct, findProductById, getAllProducts } from '../product/product.js';
import Product from '../models/product.model.js';
import mongoose from 'mongoose';

const createProd = async (req, res) => {
  try {
    const product = await createProduct(req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const findProd = async (req, res) => {
  // const productId = new mongoose.Types.ObjectId('req.body'); // Convert to ObjectId
//const product = await Product.findById(req.body);
    try {
      const product = await findProductById(req.body);
      return res.status(201).send(product);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  };

const deleteProd = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await deleteProduct(productId);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const updateProd = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await updateProduct(productId, req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getAllProds = async (req, res) => {
  try {
    const products = await getAllProducts(req.query);
    return res.status(201).send(products);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export { createProd, deleteProd, updateProd, getAllProds,findProd};
