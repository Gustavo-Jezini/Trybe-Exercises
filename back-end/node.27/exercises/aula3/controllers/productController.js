const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/products', async (req, res, next) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/products/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  if (product === null) return res.status(404).send({ message: 'Produto não encontrado' });

  res.status(200).json(product);
});

router.post('/products', async (req, res) => {
  const { name, brand } = req.body;

  try {
    const newProduct = await ProductModel.add(name, brand);

    res.status(201).json(newProduct);
  } catch (e) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
});

router.delete('/products/:id', async (req, res) => {
  try {
    const products = await ProductModel.exclude(req.params.id);

    res.status(200).json(products);
  } catch (e) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
});

router.put('/products/:id', async (req, res) => {
  const { name, brand } = req.body;

  try {
    const products = await ProductModel.update(req.params.id, name, brand);

    res.status(200).json(products);
  } catch (e) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
});

module.exports = router;