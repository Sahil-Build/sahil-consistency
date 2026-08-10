import express from "express";
import animeRoutes from "./routes/animeRoutes.js";
const app = express();
const PORT = 8080;

app.set("view engine","ejs");
app.use(express.static("public"));
app.use("/", animeRoutes);

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.listen(PORT,()=>{
    console.log("server is running on port:",PORT);
});
