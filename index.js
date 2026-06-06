const express = require("express");
const band = express();
band.use(express.json());

band.listen(8000, () => {
  console.log("server is is running on 8000");
});

band.get("/bands", (req, res) => {
  res.send("Fetching all bands");
});

band.get("/bands/search", (req, res) => {
  res.send("searching bands from: " + req.query.country);
});

band.get("/bands/:name", (req, res) => {
  res.send("Fetching Band: " + req.params.name);
});

band.delete("/bands/:name", (req, res) => {
  res.send("Deleted band: " + req.params.name);
});

band.post("/bands", (req, res) => {
  const name = req.body.name;
  const genre = req.body.genre;
  res.send("band created: " + name + " - genre: " + genre);
});
