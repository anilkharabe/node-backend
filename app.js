const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const menuRoute = require("./routes/menu");
const adminRoutes = require("./routes/adminRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");
const menuRouteByAdmin = require("./routes/menuRoutes")


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoute);
app.use("/api/admin", adminRoutes);
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/menus", menuRouteByAdmin);


module.exports = app;