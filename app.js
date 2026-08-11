const express = require("express");
const { getTopCoins } = require("./utils/coingecko.js");
const app = express();
const PORT = 8080;
app.set("view engine","ejs");
app.use(express.static("public"));


app.get("/",async (req,res)=>{
    const coins = await getTopCoins();
    res.render("index.ejs", { coins });
});

app.listen(PORT,()=>{
    console.log("server is running on port:",PORT);
});