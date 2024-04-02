import mongoose from 'mongoose';

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

export default mongoose.model('User', userSchema);