const fs      = require("fs");
const request = require('request');

const url = process.argv[2];
const local = process.argv[3];

request (url, (error, response, body) => {
  if (error) {
    console.log("error:", error);
  }
  fs.writeFile(`${local}`, body, (error) => {
    if (error) {
      console.log("error:", error);
    } else {
      console.log(`Downloaded and ${body.length} saved bytes to ${local}`)
    }
  });
});
