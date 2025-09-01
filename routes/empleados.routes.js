const express = require('express');
const router = express.Router();
const empleadoCtrl = require('../controllers/empleado.controllers');
router.get('/', empleadoCtrl.getEmpleados); // Obtener todos los empleados
router.get('/:id', empleadoCtrl.getEmpleado); // Obtener un empleado por ID
router.post('/', empleadoCtrl.createEmpleado); // Crear un nuevo empleado
router.put('/:id', empleadoCtrl.updateEmpleado); // Actualizar un empleado por ID
router.delete('/:id', empleadoCtrl.eliminarEmpleado); // Eliminar un empleado por ID

module.exports = router; // Exportar el router
