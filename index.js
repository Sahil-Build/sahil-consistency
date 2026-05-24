import express from "express";
const app = express();
const PORT = 3000;
let posts = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/posts", (req, res) => {
  res.render("posts.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  const post = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
    date: new Date().toLocaleDateString(),
  };
  posts.push(post);
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);
  res.render("post.ejs", { post: post });
});

app.post("/posts/:id/delete", (req, res) => {
  const id = parseInt(req.params.id);
  posts = posts.filter((p) => p.id !== id);
  res.redirect("/posts");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
