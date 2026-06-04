const fs = require("fs");
const inquirer = require("inquirer");
const qr = require("qrcode");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      type: "input",
      name: "url",
      message: "enter the url of the file you want to qr",
    },
  ])
  .then((answers) => {
    const url = answers.url;
    qr.toFile("qr.png", url, (err) => {
      if (err) {
        console.log(chalk.red("Error generating qr code:", err));
      } else {
        console.log(
          chalk.green("QR code generated successfully! saved as qr.png"),
        );
      }
    });
  });
