const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => { 
    // console.log("req", req);
    return "hello world";
    res.end();
})
server.listen(8888,'127.0.0.1');