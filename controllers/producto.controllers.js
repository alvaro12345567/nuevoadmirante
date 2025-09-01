const Producto = require('../models/producto.models');

const productoCtrl = {};

productoCtrl.getProductos = async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
};

productoCtrl.createProducto = async (req, res) => {
    const producto = new Producto({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        cantidad: req.body.cantidad
    });
    await producto.save();
    res.json({ status: 'Producto guardado' });
};

productoCtrl.getProducto = async (req, res) => {
    const codigo = parseInt(req.params.codigo);
    const producto = await Producto.findOne({ codigo });

    if (!producto) {
        return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }

    res.json(producto);
};

productoCtrl.editarProducto = async (req, res) => {
    const codigo = parseInt(req.params.codigo);
    const datosActualizados = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        cantidad: req.body.cantidad
    };

    const actualizado = await Producto.findOneAndUpdate({ codigo }, { $set: datosActualizados }, { new: true });

    if (!actualizado) {
        return res.status(404).json({ status: 'Producto no encontrado' });
    }

    res.json({ status: 'Producto actualizado' });
};

productoCtrl.eliminarProducto = async (req, res) => {
    const codigo = parseInt(req.params.codigo);
    const eliminado = await Producto.findOneAndDelete({ codigo });

    if (!eliminado) {
        return res.status(404).json({ status: 'Producto no encontrado' });
    }

    res.json({ status: 'Producto eliminado' });
};

module.exports = productoCtrl;
