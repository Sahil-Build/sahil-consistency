import express from "express";
import ejs from "ejs";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  const today = new Date();
  let day = today.getDay();

  let dayType = "weekday";
  let advice = "week day so stay active and work hard";

  if (day === 0 || day === 6) {
    dayType = "weekend";
    advice = "weekend so relax and enjoy your time";
  }

  res.render("index", {
    dayType: dayType,
    advice: advice,
  });
});
