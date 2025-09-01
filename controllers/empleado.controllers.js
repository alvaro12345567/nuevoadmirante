const Empleado= require('../models/empleado.models'); // Importa el modelo Empleado
const empleadoCtrl= {};
// definir los metodos
// metodo para obtener todos los empleados
empleadoCtrl.getEmpleados = async (req, res) => {
        const empleados = await Empleado.find();
        res.json(empleados);
    };

// metodo para obtener un empleado por id
empleadoCtrl.getEmpleado= async (req, res) => {
    const empleado = await Empleado.findById(req.params.id);
    if (!empleado) {
        return res.status(404).json({ message: 'Empleado no encontrado' });
    }
    res.json(empleado);
}
// metodo para crear un nuevo empleado
empleadoCtrl.createEmpleado = async (req, res) => {
    const empleado =new Empleado(req.body);
    await empleado.save();
    res.json({status: 'Empleado creado'});
}
// metodo de actualziar un empleado
empleadoCtrl.updateEmpleado = async (req, res) => {
    const {id} =req.params;
    const empleado = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
await Empleado.findByIdAndUpdate(id, {$set: empleado},{new:true});
res.json({status: 'Empleado actualizado'});
}
//metodo para eliminar un empleado
empleadoCtrl.eliminarEmpleado = async (req, res) => {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({status: 'empleado eliminado con exito'})
}
// Exportar el controlador
 module.exports= empleadoCtrl;

