import {model,Schema} from 'mongoose'
const UserSchema = new Schema ({
    Usuario_id:{
        unique:true,
        require:true,
        type:Number
    },
    name:String,
    lastname:String,
    password:String
},{
versionKey:false,
timestamps:true
})
export default model('User',UserSchema)