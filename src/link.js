const fs = require("fs");

fs.link("src/text.txt", "src/text222.txt", (err, data) => {
  if (err) {
    console.log("err:", err);
  } else {
    console.log("data:", data);
  }
});
