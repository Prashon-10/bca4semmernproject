import bcrypt from 'bcrypt';
import User from '../models/User.js';

class UserController {
    async index(req, res) {
        try {
            let users = await User.find({});
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    async show(req, res) {
        try {
            let id = req.params.id;
            const user = await User.findById(id);
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async store(req, res) {
        try {
            let image = "";
            if (req.file) {
                image = req.file.filename;
            }
            let password = req.body.password;
            const salt = await bcrypt.genSalt(10);
            password = await bcrypt.hash(password, salt);
            const user = await User.create({ ...req.body, password, image });
            res.status(201).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async update(req, res) {
        res.send("User updated")
    }

    async destroy(req, res) {
        try {
            let id = req.params.id;
            await User.findByIdAndDelete(id);
            res.status(200).json({ message: "User deleted successfully" });
        } catch (err) {
            res.status(500).json(err);
        }
    }

}

export default UserController;