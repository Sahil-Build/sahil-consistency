const express = require("express");
const app = express();
app.use(express.json());
const port = 8080;

app.use((req, res, next) => {
  console.log("request method:" + req.method + ",request path:" + req.path);
  next();
});

const checkGrade = (req, res, next) => {
  const grade = req.body.grade;
  if (grade && grade <= 100 && grade >= 0) {
    next();
  } else {
    res.send("Invalid grade!");
  }
};

app.listen(port, () => {
  console.log("listening to the port:", port);
});

app.get("/students/search", (req, res) => {
  res.send("seaching students studying:" + req.query.subject);
});

app.get("/students", (req, res) => {
  res.send("Fetching all the students");
});

app.get("/students/:name", (req, res) => {
  res.send("Fetching student:" + req.params.name);
});

app.post("/students", checkGrade, (req, res) => {
  res.send("Student added: " + req.body.name + "- Grade:" + req.body.grade);
});

app.delete("/students/:name", (req, res) => {
  res.send("removed student:" + req.params.name);
});
