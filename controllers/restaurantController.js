const Restaurant = require("../models/Restaurant");

exports.createRestaurant = async (req, res) => {
  try {
    const { name, cuisine, address } = req.body;

    const restaurant = await Restaurant.create({
      name,
      cuisine,
      address,
      owner: req.user.id,
    });

    res.status(201).json(restaurant);

  } catch (error) {
    console.log("error", error)
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getRestaurant = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      owner: req.user.id
    })
    res.json(restaurants);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};