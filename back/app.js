
import express from 'express'
import morgan from 'morgan'
import ejs from 'ejs'


const app = express()
//senttigs
app.set('view engine',ejs)
app.set('port',process.env.port || 3000)
//Middlewares 

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('env'))

//Routes
app.use('/api/ingreso',)
export default app