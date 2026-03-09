const mariadb = require("mariadb");
const config = require("../config/config");

const configDatabase = mariadb.createPool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  port: config.db.port,
  connectionLimit: 5
});

async function conectionDB() {
  try {
    const conn = await configDatabase.getConnection();
    console.log("Banco de dados conectado com sucesso!");
    conn.release();
  } catch (err) {
    console.error("Erro ao conectar no banco:", err);
  }
}

module.exports = {
  configDatabase,
  conectionDB
};