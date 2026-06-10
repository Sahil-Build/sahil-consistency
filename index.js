const express = require("express");
const app = express();
const port = 8080;
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log("listening to the port:", port);
});

app.get("/report", (req, res) => {
  const marks = [85, 90, 78, 92, 68];
  let result = "pass";
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 75) {
      result = "fail";
    }
  }

  res.render("index", {
    name: "sahil",
    marks: marks,
    result: result,
  });
});
