const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");
const mongodb = require("mongodb");

const app = express();

app.set("port", process.env.PORT || 2500);
app.set("views", path.join(__dirname, "/views/"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "/public/")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use('/uploads', express.static('uploads'));

require("./ROUTES/index.js")(app);



app.listen(app.get("port"), ()=>{
    console.log("Server in port " + app.get("port"));
})