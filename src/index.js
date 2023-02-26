const path = require("path");
const hbs = require("hbs");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.use(express.static(publicPath));
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("*", (req, res) => {
  res.render("error");
});

app.listen(port, () => {
  console.log("server is listening the request on port 3000");
});

// files in green are those which have not been commited yet alright

// vs code hides the dir by default
// we wanted to see what's inside theri
