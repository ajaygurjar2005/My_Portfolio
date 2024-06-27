const Category = require("../Modal/CategorySchema.js");

const CategoryController = async (req, res) => {
  const data = req.body;
  const category = new Category(data);
  await category.save();
  res.status(200).json({ msg: "Succesfully", data: category});
};

const GetCategoryController = async (req, res) => {
  try {
    const store = await Category.find({});
    res.status(200).json({ msg: "Succesfully", data: store });
  } catch (err) {
    console.log(err);
    res.status(201).json({ msg: "Sorry Something Wrong", err });
  }
};

module.exports = { CategoryController, GetCategoryController };
