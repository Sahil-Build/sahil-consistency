import express from "express";
import axios from "axios";
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/explore", async(req,res)=>{
  try {
    const query = req.query.q
    console.log("Search query:", query);
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${query}`,
    );
    console.log(response.data);
    res.render("explore.ejs",{countries:response.data});
  }catch (error){
    console.log(error.message);
    res.status(404).send("country not Found");
  }
});

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
