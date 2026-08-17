const express = require("express");
const app = express();
const { getTopCoins, getCoinById } = require("./utils/coingecko.js");
const PORT = 8080;
app.set("view engine","ejs");
app.use(express.static("public"));


app.get("/",async (req,res)=>{
    const coins = await getTopCoins();
    res.render("index.ejs", { coins });
});

app.get("/coin/:id", async (req,res)=>{
    const coin = await getCoinById(req.params.id);
    res.render("coin.ejs",{ coin });
})

app.listen(PORT,()=>{
    console.log("server is running on port:",PORT);
});