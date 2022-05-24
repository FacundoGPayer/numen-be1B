const express = require("express");
const router = express.Router();
const productSchema = require('../models/products');

//CREATE //Crear productos
router.post('/products', (req, res) => {
   const product = productSchema(req.body);
   product.save()
   .then((d) => res.json(d))
   .catch((e) => res.json({message: e}));
});
//READ //Leer todos
router.get('/products', (req, res) => {
    productSchema.find()
    .then((d) => res.json(d))
    .catch((e) => res.json({message: e}));
 });
 //READ //Leer por ID
router.get('/products:id', (req, res) => {
    const{id} = req.params;
    productSchema.findOne({id:id})
    .then((d) => res.json(d))
    .catch((e) => res.json({message: e}));
 });
  //UPDATE //Actualizar
router.get('/products:id', (req, res) => {
    const{id} = req.params;
    const{nombre, marca, descripcion, precio, stock} = req.body;
    productSchema.updateOne({id:id}, {$set: {nombre, marca, descripcion, precio, stock}})
    .then((d) => res.json(d))
    .catch((e) => res.json({message: e}));
 });
   //DELETE //Eliminar
router.get('/products:id', (req, res) => {
    const{id} = req.params;
    productSchema.remove({id:id})
    .then((d) => res.json(d))
    .catch((e) => res.json({message: e}));
 });

module.exports = router;