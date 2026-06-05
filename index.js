const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.get("/movies", (req, res) => {
  res.send("browsing genre:" + req.query.genre);
});

app.get("/movies/:title", (req, res) => {
  res.send("movie: " + req.params.title + " from year: " + req.query.year);
});
