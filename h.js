var fs = require("fs");

fs.readFile("test.js", "utf-8", (err, data) => {
  console.log(data);
fs.writeFile("temp.txt", data, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});
});
