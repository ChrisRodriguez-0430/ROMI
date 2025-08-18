import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://Chris:Mapachito070323@cluster0.kgldcz3.mongodb.net/')
.then((db)=> console.log ("Mongodb atlas connected"))
.catch((error)=>console.error(error))
export default mongoose