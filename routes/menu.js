const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  const { restaurantId } = req.query;

  if (!restaurantId) {
    return res.status(400).json({ error: "restaurantId is required" });
  }

  let filePath = path.join(__dirname, `../data/${restaurantId}.json`);

  if (!fs.existsSync(filePath)) {
    filePath = path.join(__dirname, `../data/56869.json`);
    // return res.status(404).json({ error: "Restaurant not found" });
  }

  const data = fs.readFileSync(filePath, "utf-8");
  res.json(JSON.parse(data));
});

module.exports = router;