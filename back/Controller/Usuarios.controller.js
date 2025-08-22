
import UsuariosModels from '../Models/Usuarios.models.js';

// Agrega un nuevo usuario
export const nuevoUser = async (req, res, next) => {
    const estudiante = new UsuariosModels(req.body);
    try {
        // Almacenar el registro
        await estudiante.save();
        res.json({ mensaje: 'Se agregó un nuevo estudiante' });
    } catch (error) {
        res.status(500).send(error);
        next();
    }
};

// Muestra todos los usuarios
export const mostrarUser = async (req, res, next) => {
    try {
        const estudiantes = await UsuariosModels.find({});
        res.json(estudiantes);
    } catch (error) {
        console.error(error);
        next();
    }
};
