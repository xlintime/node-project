const fs = require("fs");

fs.readFile("src/text.txt", (err, data) => {
  let result = "";
  if (err) {
    console.log("err:", err);
  } else {
    console.log("data:", data.toString());
    result = data.toString();
  }
  const newStr = result.replace(/<([^<>]*)>/g, (match, c) => {
    return `<Route>${c}</Route>`;
  });
  console.log("result", newStr);
});
