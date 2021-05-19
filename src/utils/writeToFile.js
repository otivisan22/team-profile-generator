const fs = require("fs");
const path = require("path");

const writeToFile = (data) => {
  const callback = (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Generated team Profile successfully");
    }
  };

  const filePath = path.join(__dirname, "../../dist/index.html");

  fs.writeFile(filePath, data, callback);
};

module.exports = writeToFile;
