const fs = require("fs");

fs.stat("src/text.txt", (err, data) => {
  if (err) {
    console.log("err:", err);
  } else {
    console.log("data:", data);
  }
});
