const express = require("express");

const server = express();

const config = require("./config/config.js"); // IMPORT CONFIG
const {conectionDB} = require("./database/db.js");// IMPORT DB

// IMPORT ROUTES
const userRoute = require("./routes/userRoute.js");

server.use(express.json()); // J S O N
conectionDB(); // Conexão com o Database

// ROUTES
server.use("/user", userRoute);

server.listen(config.port, () => {
  console.log(`Servidor rodando na porta ${config.port}`);
});