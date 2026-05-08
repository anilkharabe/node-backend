const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const ownerOnly = require("../middleware/ownerMiddleware");
const { createRestaurant, getRestaurant } = require("../controllers/restaurantController");

// create restaurant
router.post(
  "/",
  protect,
  ownerOnly,
  createRestaurant
);

router.get(
  "/",
  protect,
  ownerOnly,
  getRestaurant
);


module.exports = router;