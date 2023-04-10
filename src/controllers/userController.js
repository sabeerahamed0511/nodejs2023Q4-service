const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const uuid = require("uuid");

userController = {};

userController.getAllUser = async (req, res) => {
    try {
        let users = await User.find();
        res.status(200).json({ status: "Success", users });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

userController.getSingleUser = async (req, res) => {
    try {
        let user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ status: "Failure", message: "User doesn't exists" });
        res.status(200).json({ status: "Success", user : {...user, password : "Hidden for security purpose"} });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

userController.newUser = async (req, res) => {
    try {
        let hashedPasssword = await bcrypt.hash(req.body.password, 10);
        let user = await new User({
            ...req.body,
            _id : uuid.v4(),
            password: hashedPasssword
        });
        user = await user.save();
        res.status(201).json({ status: "Success", message: "New user created." });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

userController.updateUser = async (req, res) => {
    try {
        let user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ status: "Failure", message: "User doesn't exists" });
        if (await bcrypt.compare(req.body.oldPassword, user.password)) {
            let newpassword = await bcrypt.hash(req.body.newPassword, 10);
            await User.findByIdAndUpdate(req.params.id, { password: newpassword });
            res.status(200).json({ status: "Success", message: "Password updated." });
        } else {
            res.status(403).json({ status: "Failure", message: "Old password doesn't match." });
        }
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

userController.deleteUser = async (req, res) => {
    try {
        let user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ status: "Failure", message: "User doesn't exists" });
        await User.findByIdAndDelete(req.params.id);
        res.status(204).json({ status: "Success", message: "User deleted." });

    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

module.exports = userController;