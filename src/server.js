require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.DB_URL)
.then(() => console.log("Connected to DB..."))
.catch(() => console.log("Error while connecting to DB!!!"));

app.listen(PORT, () => console.log(`server listening on port ${PORT}...`));