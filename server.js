const express = require("express");
const menuRoute = require("./routes/menu");
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
// res.setHeader('Access-Control-Allow-Origin', '*');

app.use("/api/menu", menuRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});