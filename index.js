import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit", (req, res) => {
  console.log(req.body);

  const fullName = req.body.fName + " " + req.body.lName;

  const letters = fullName.replace(" ", "").length;

  res.render("index", {
    title: `Hello ${fullName}! Your name has ${letters} letters.`,
  });
});

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
