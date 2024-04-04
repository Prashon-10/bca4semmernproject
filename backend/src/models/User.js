import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true,
    },
    role:{
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    image:{
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }

});

userSchema.methods.toJSON = function(){
    var obj = this.toObject();
    if(obj.image){
        obj.image = process.env.PUBLIC_URL + "/users/" + obj.image;
    }else{
        obj.image = process.env.PUBLIC_URL + "/icons/notfound.png";
    }
    delete obj.password;
    return obj;
}

export default mongoose.model('User', userSchema);