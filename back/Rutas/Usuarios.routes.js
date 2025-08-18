import { Router } from "express";
import { nuevoUser,mostrarUser } from "../Controller/Usuarios.controller.js";
const router = Router()
 
    // Agrega nuevos clientes via POST
    router.post('/user',nuevoUser
    );

    // Obtener todos los clientes
    router.get('/users', mostrarUser
    );


export default router