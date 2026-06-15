const express = require("express");
const app = express();
const port = 8080;
app.set("view engine", "ejs");
const hobbies = ["reading", "sleeping", "gaming"];

app.listen(port, () => {
  console.log("listening to the server:", port);
});

app.get("/", (req, res) => {
  res.render("index", { name: "sahil" });
});

app.get("/hobbies", (req, res) => {
  res.render("hobbies", { hobbies: hobbies });
});
