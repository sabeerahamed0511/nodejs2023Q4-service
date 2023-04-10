const express = require("express");
const app = express();
const userRouter = require("./routers/userRouter");
const artistRouter = require("./routers/artistRouter");
const albumRouter = require("./routers/albumRouter");
const trackRouter = require("./routers/trackRouter");
const favoritesRouter = require("./routers/favoritesRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRouter);
app.use("/artist", artistRouter);
app.use("/album", albumRouter);
app.use("/track", trackRouter);
app.use("/favs", favoritesRouter);

module.exports = app;