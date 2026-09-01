const express = require("express");
const app = express();
app.use(express.json());
const port = 4000;

app.listen(port, () => {
  console.log("listening to the port", port);
});

const checkPassword = (req, res, next) => {
  const password = req.query.password;
  if (password && password == "ilovecoding") {
    next();
  } else {
    res.send("password is wrong, try again!");
  }
};

app.get("/secret", checkPassword, (req, res) => {
  res.send("welcome, here is the secret:67");
});
