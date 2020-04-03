const path = require("path");
const prettier = require("prettier");
const filePath = path.resolve(__dirname, "../project/test.js");

prettier
  .resolveConfig(filePath)
  .then(console.log)
  .catch(console.error);
