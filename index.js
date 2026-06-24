const express = require("express");
const app = express();
let posts = [
  {
    id: 1,
    title: "my first post",
    content: "this is the content of my first post",
  },
  { id: 2, title: "my second post", content: "second post content here" },
];

const port = 8080;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("server is running on port:", port);
});

app.get("/", (req, res) => {
  res.render("homepage", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("newPost");
});

app.get("/posts/:id", (req, res) => {
  const post = posts.find(function (p) {
    return p.id == req.params.id;
  });
  res.render("posts", { post });
});

app.get("/posts/:id/edit", (req, res) => {
  const post = posts.find(function (p) {
    return p.id == req.params.id;
  });
  res.render("editpost", { post: post });
});

app.post("/posts", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  let newPost = { id: posts.length + 1, title: title, content: content };
  posts.push(newPost);
  res.redirect("/");
});

app.post("/posts/:id", (req, res) => {
  const post = posts.find(function (p) {
    return p.id == req.params.id;
  });
  post.title = req.body.title;
  post.content = req.body.content;
  res.redirect("/");
});

app.post("/posts/:id/delete", (req, res) => {
  posts = posts.filter(function (p) {
    return p.id != req.params.id;
  });
  res.redirect("/");
});
