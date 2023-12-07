const app = require('./app/app');
const http = require('http');

const port = process.env.port || 3007;

const server = http.createServer(app);

server.listen(port);

if(server) console.log('Server is running on port', port);