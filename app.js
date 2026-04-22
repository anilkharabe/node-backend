const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const menuRoute = require("./routes/menu");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoute);

module.exports = app;