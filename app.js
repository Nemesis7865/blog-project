const mongoose = require("mongoose"); //import mongoose
const express = require("express"); //import express
const blog = require('./routes/tasks'); //import route

const app = express();

app.use(express.static("./public"));
app.use(express.json())

require("dotenv").config()

const db = require("./db/conect").Mongo_URL;

//db connection
mongoose
 .connect(db, {dbName: "Blog-project"})
 .then(() => console.log("connected to mongoDB"))
 .catch((err) => console.error(err))


app.use("/api/v1/blog", blog)

app.listen(2345, () => {
    console.log("server running on 2345")
})

