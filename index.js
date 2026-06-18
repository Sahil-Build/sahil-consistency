const express = require("express");
const app = express();
const port = 8080;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("listening to the port:", port);
});

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
});
