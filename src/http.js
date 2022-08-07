const http = require("http");
const server = http.createServer((req, res) => {
  // console.log("req", req);
  console.log("hello world");

  res.setHeader("xxx", "ooo");
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write("content");
  //   console.log(req.headers);
  res.end(); // 必须加上end才会返回
});

server.listen(8888, "127.0.0.1");
