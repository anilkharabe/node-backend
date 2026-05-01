const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { users } = require("../models/user.model");

const SECRET = "mysecret";

// Register
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = users.find((u) => u.email === email);

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser  = {
      id: Date.now().toString(),
      name,
      email,
      password: hashedPassword,
    };

    users.push(newUser);

    console.log("user", newUser);

    // const token = jwt.sign(
    //   { id: user._id },
    //   process.env.JWT_SECRET,
    //   { expiresIn: "1d" }
    // );

    res.status(201).json({
      user: {
        name: newUser.name,
        email: newUser.email,
      },
    });

  } catch (error) {
    console.log('error', error)
    res.status(500).json({ message: error.message });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = users.find((u) => u.email === email);

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      SECRET 
    );

    const userData = {
      _id: user._id,
      name: user.name,
      email: user.email,
    };

    res.json({
      token,
      user: userData,
    });

  } catch (error) {
    console.log("error", error)
    res.status(500).json({ message: error.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    res.json(user);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
