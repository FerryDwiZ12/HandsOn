const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  res.end("Hello, World!");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

const rs = fs.createReadStream("./demofile.txt");
rs.on("open", function () {
  console.log("The file is open");
});
