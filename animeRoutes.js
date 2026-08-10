import express from "express";
import { searchAnime } from "../utils/jikan.js";

const router = express.Router();

router.get("/search",async (req,res)=>{
    const results = await searchAnime(req.query.q);
    res.render("search.ejs",{results});
});

export default router;