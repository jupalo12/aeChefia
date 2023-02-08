const http = require('http');
const app = require('./app');
require('dotenv/config')
const port = process.env.PORT || 3031;
const server = http.createServer(app)


server.listen(port);