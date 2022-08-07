const http = require("http");
const options = {
  hostname: "localhost",
  port: 8888,
  path: "/",
  method: "POST",
};

const req = http.request(options, (res) => {
  console.log("statusCode", res.statusCode);
});
req.write("你好");
req.end();
