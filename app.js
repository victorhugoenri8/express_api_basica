require("dotenv").config();
const { configDotenv } = require("dotenv");
const Server = require("./models/server");


const server = new Server;

server.listen();

console.log('hola mi vida');

