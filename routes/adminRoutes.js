const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

const {
  approveOwner,
  getPendingOwners,
} = require("../controllers/adminController");

// get pending owners
router.get(
  "/pending-owners",
  protect,
  adminOnly,
  getPendingOwners
);

// approve owner
router.put(
  "/approve-owner/:id",
  protect,
  adminOnly,
  approveOwner
);

module.exports = router;