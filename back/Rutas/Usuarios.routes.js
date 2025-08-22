import { Router } from "express";
import { nuevoUser,mostrarUser } from "../Controller/Usuarios.controller.js";
const router = Router()
 
    // Agrega nuevos usuarios via POST
    router.post('/user',nuevoUser
    );

    // Obtener todos los usuarios
    router.get('/users', mostrarUser
    );


export default router
