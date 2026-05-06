/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      name: "URL",
      type: "input",
      message: "enter a url to generate a qr code",
    },
  ])
  .then((answer) => {
    const url = answer.URL;

    //create a qr code image
    const qrCode = qr.image(url, { type: "png" });

    // save the qr iame file
    qrCode.pipe(fs.createWriteStream("qr-code.png"));

    // save the user input in a txt file
    fs.writeFile("user-input.txt", url, (err) => {
      if (err) throw err;
      console.log("user input saved to user-input.txt");
    });
  });
