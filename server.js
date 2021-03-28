const express = require("express");
const ConnectDB = require("./helpers/ConnectDB");
const app = express();

//connect to db
ConnectDB();
// middlewars
app.use(express.json());
//define Routes
app.use("/register", require('./routes/register'));
app.use("/login", require('./routes/login'));
app.use("/post", require('./routes/post'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('sever is running on PORT: ${PORT}'));