const http = require('http');
const fs = require('fs');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();


app.use(bodyParser.json());
app.use(cors());

const main = require('./routes/mainRoute');
app.use('/api/main', main);

PORT = 8080;
const server = http.createServer(app);

server.listen(PORT, () => {
	console.log(`Server is listening at port ${PORT}`);
});