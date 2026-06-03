const fs = require("fs");
const content = "hello node is smooth";
const update = "- added by Node";

fs.writeFile("notes.txt", content, "utf8", (err) => {
  if (err) {
    console.log("Error took place, cant write the file");
  } else {
    console.log("file written successfully");
    fs.readFile("notes.txt", "utf8", (err, data) => {
      if (err) {
        console.log("theres a error in reading thr file");
      } else {
        console.log("now reading the file for 1st time:", data);
        fs.appendFile("notes.txt", update, "utf8", (err) => {
          if (err) {
            console.log("error appending the file");
          } else {
            console.log("appended successfully!");
            fs.readFile("notes.txt", "utf8", (err, data) => {
              console.log("reading for second time:", data);
            });
          }
        });
      }
    });
  }
});
