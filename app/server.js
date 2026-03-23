const http = require("http");

const VERSION = process.env.APP_VERSION || "v1";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ status: "ok", message: `Hello from ${VERSION}!` }));
});

const PORT = 8888;

server.listen(PORT, () => {
  console.log(`Playground ${VERSION} running on port ${PORT}`);
});
