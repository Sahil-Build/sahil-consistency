import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`server is running on port ${port}.`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h2>Contact us at 9505849241</h2>");
});

app.get("/about", (req, res) => {
  res.send("<p>We are a company that provides web development services.</p>");
});
