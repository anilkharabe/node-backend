const User = require("../models/User");

// approve owner
exports.approveOwner = async (req, res) => {
  try {
    const { id } = req.params;

    const owner = await User.findById(id);

    if (!owner) {
      return res.status(404).json({
        message: "Owner not found",
      });
    }

    // validate role
    if (owner.role !== "owner") {
      return res.status(400).json({
        message: "User is not an owner",
      });
    }

    owner.status = "approved";

    await owner.save();

    res.json({
      message: "Owner approved successfully",

      owner: {
        id: owner._id,
        name: owner.name,
        email: owner.email,
        role: owner.role,
        status: owner.status,
      },
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getPendingOwners = async (req, res) => {
  try {
    const owners = await User.find({
      role: "owner",
      status: "pending",
    }).select("-password");

    res.json(owners);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};