const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
  res.end('CI/CD pipeline with Jenkins, Docker, Kubernetes, and AWS');
});
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
