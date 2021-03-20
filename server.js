const express = require("express");
const ConnectDB = require("./helpers/ConnectDB");
const app = express();

//connect to db
ConnectDB();
// middlewars
app.use(express.json());
//define Routes
app.use("/register", require('./routes/register'));
app.use(express.json())

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('sever is running on PORT: ${PORT}'));