const express = require('express');
const router = express.Router();

const productoCtrl = require('../controllers/producto.controllers');

router.get('/', productoCtrl.getProductos);               // Obtener todos
router.post('/', productoCtrl.createProducto);            // Crear producto
router.get('/:codigo', productoCtrl.getProducto);         // Obtener por código
router.put('/:codigo', productoCtrl.editarProducto);      // Editar por código
router.delete('/:codigo', productoCtrl.eliminarProducto); // Eliminar por código

module.exports = router;
