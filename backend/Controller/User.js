const nodemailer = require('nodemailer')
const User = require("../Modal/UserSchema.js");
const UserController = async (req, res) => {
  try {
    const data = req.body;
    const email = req.body.email;
    const name = req.body.name;
    const saveData = new User(data);
    await saveData.save();
    console.log(data, "data");

    const auth = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      port: 456,
      auth: {
        user: "vijaytanwar952@gmail.com",
        pass: "mlzf ikxh lbed ccuj",
      },
    });

    const receiver = {
      from: "vijaytanwar952@gmail.com",
      to: `${email}`,
      subject: "Node Js Mail Testing",
      text: `Hi ${name} you a login succefully to Ajay Portfolio`,
    };

    auth.sendMail(receiver, (err, res) => {
      if (err) throw err;
      console.log("succes");
      res.end();
    });

    res.status(200).json({ msg: "Login succesfully" });
  } catch (err) {
    console.log(err);
  }
};

const UserControllerGet = async (req, res) => {
  try {
    const store = await User.find({});
    res.status(200).json({ msg: "Succesfully", data: store });
  } catch (err) {
    console.log(err);
  }
};
module.exports = { UserController, UserControllerGet };
