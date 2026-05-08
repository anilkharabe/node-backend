const User = require("../models/User");

const ownerOnly = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user || user.role !== "owner") {
      return res.status(403).json({
        message: "Owner access only",
      });
    }

    next();

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = ownerOnly;