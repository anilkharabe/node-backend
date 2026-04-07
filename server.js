const express = require("express");
const menuRoute = require("./routes/menu");

const app = express();
const PORT = 5000;

app.use("/api/menu", menuRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});