const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createMenu,
  getMenus,
  deleteMenu,
  updateMenu,
} = require("../controllers/menuController");

router.post("/", protect, createMenu);
router.get("/:restaurantId", protect, getMenus);
router.delete("/:id", protect, deleteMenu);
router.put("/:id", protect, updateMenu);

module.exports = router;
