import https from "https";

export function searchAnime(query) {
  return new Promise((resolve, reject) => {
    https
      .get(`https://api.jikan.moe/v4/anime?q=${query}`, (res) => {
        let body = "";
        res.on("data", (chunk) => {
          body += chunk;
        });
        res.on("end", () => {
          try {
            const data = JSON.parse(body);
            resolve(data.data);
          } catch (err) {
            reject(err);
          }
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}
