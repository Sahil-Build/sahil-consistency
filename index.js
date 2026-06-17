const express = require("express");
const app = express();
const port = 8080;
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log("listening to the port:", port);
});

app.get("/", (req, res) => {
  const adjectives = [
    "crazy",
    "lunatic",
    "abomination",
    "dark",
    "fiend",
    "exclamitor",
    "golden",
    "throttle",
  ];
  const nouns = [
    "dragons",
    "speedsters",
    "incredible",
    "eagles",
    "spartans",
    "executioner",
    "legends",
    "wolves",
  ];

  let bandName =
    adjectives[Math.floor(Math.random() * adjectives.length)] +
    " " +
    nouns[Math.floor(Math.random() * nouns.length)];

  res.render("index", { bandName });
});
