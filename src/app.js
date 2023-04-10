const express = require("express");
const app = express();
const userRouter = require("./routers/userRouter");
const artistRouter = require("./routers/artistRouter");
const albumRouter = require("./routers/albumRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRouter);
app.use("/artist", artistRouter);
app.use("/album", albumRouter);

module.exports = app;