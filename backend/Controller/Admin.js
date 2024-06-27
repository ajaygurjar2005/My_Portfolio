const User = require("../Modal/UserSchema.js");

const AdminController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email !== "ajaygurjar7003@gmail.com") {
      return res.status(201).json({ msg: "Please fill correct email id" });
    }
    if (password !== "ajay7375") {
      return res.status(201).json({ msg: "Please fill correct password" });
    }
    res
      .setHeader("Content-Type", "application/json")
      .status(200)
      .json({ msg: "Welcome to admin panel" });
  } catch (err) {
    console.log(err);
    res.setHeader("Content-Type", "application/json");
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id, "id");

    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.status(200).json({ msg: "User deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const Search = async (req,res) => {
  try {
    const name = req.params.name;
    console.log(name)
    if (!name) {
      return res.status(400).json({ error: "Name parameter is required" });
    }

    const users = await User.findOne({name:name});
    console.log(users,'use')

    res.status(200).json({data:users});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { AdminController, deleteUser,Search };
