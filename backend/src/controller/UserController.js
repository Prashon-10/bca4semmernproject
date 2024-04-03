import User from '../models/User.js';
import bcrypt from 'bcrypt';
class UserController {
    async index(req, res) {
        const users = await User.find({});
        res.status(200).json(users);
    }
    async show(req, res) {
        let id = req.params.id;
        const user = await User.findById(id);
        res.status(200).json(user);
    }

    async store(req, res) {
        let image="";
        if(req.file){
            image = req.file.filename;
        }
        let password = req.body.password;
        const salt = bcrypt.genSaltSync(10);
        password = bcrypt.hashSync(password, salt);
        const user = await User.create({...req.body, image});
        res.status(201).json(user);
    }

    async update(req, res) {
        res.send("User updated")
    }

    async destroy(req, res) {
        res.send("User deleted")
    }

}

export default UserController;