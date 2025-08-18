import express from 'express'
import morgan from 'morgan'
import ejs from 'ejs'
import cors from 'cors' 
import userRoutes from './Rutas/Usuarios.routes.js'

const app = express()
//settings
app.set('view engine', ejs)
app.set('port', process.env.port || 3000)
//Middlewares 

app.use(cors()) 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev')) 

//Routes
app.use('/api/ingreso', userRoutes)
export default app