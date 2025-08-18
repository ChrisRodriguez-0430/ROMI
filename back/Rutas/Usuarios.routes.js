import { Router } from "express";
import { nuevoUser,mostrarUser } from "../Controller/Usuarios.controller.js";
const router = Router()
 
    // Agrega nuevos clientes via POST
    router.post('/student',nuevoUser
    );

    // Obtener todos los clientes
    router.get('/students', mostrarUser
    );


export default router