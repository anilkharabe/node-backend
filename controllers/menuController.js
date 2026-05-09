const Menu = require("../models/Menu");

// CREATE MENU ITEM
exports.createMenu = async (req, res) => {
  try {
    const {
      restaurant,
      name,
      price,
      category,
      isVeg,
      description
    } = req.body;

    const menu = await Menu.create({
      restaurant,
      name,
      price,
      category,
      isVeg,
      description
    });

    res.status(201).json(menu);

  } catch (error) {
    console.log("error",error)
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET MENU ITEMS
exports.getMenus = async (req, res) => {
  try {
    const menus = await Menu.find({
      restaurant: req.params.restaurantId,
    });

    res.json(menus);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE MENU
exports.deleteMenu = async (req, res) => {
  try {
    await Menu.findByIdAndDelete(req.params.id);

    res.json({
      message: "Menu deleted",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE MENU
exports.updateMenu = async (req, res) => {
  try {
    const updatedMenu = await Menu.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json(updatedMenu);

  } catch (error) {
    console.log("error", error)
    res.status(500).json({
      message: error.message,
    });
  }
};