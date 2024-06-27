const express = require("express");
const app = express();
const cors = require("cors");
const bodyParsar = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { UserController, UserControllerGet } = require("./Controller/User.js");
const {
  CategoryController,
  GetCategoryController,
} = require("./Controller/Category.js");
const {
  AdminController,
  deleteUser,
  Search,
} = require("./Controller/Admin.js");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(bodyParsar.json({ extended: true }));
app.use(bodyParsar.urlencoded({ extended: true }));

app.post("/user", UserController);
app.get("/getuser", UserControllerGet);
app.post("/category", CategoryController);
app.get("/getcategory", GetCategoryController);
app.post("/admin", AdminController);
app.delete("/deleteuser/:id", deleteUser);
app.get("/search/:name", Search);

mongoose
  .connect(process.env.MONGODB_URL)
  .then((success) => {
    app.listen(process.env.PORT, () =>
      console.log("server start and mongodb connected")
    );
  })
  .catch((err) => {
    console.log(err);
  });
