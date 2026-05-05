const fs = require("fs");

/*fs.writeFile("hello.txt", "hello sahil", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});*/

fs.readFile("hello.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
