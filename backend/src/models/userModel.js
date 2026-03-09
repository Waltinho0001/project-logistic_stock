const { configDatabase } = require("../database/db");

// Criar usuário
async function createUser(user) {
  const conn = await configDatabase.getConnection();

  const sql = `
    INSERT INTO users (name, email, number, role)
    VALUES (?, ?, ?, ?)
  `;

  const result = await conn.query(sql, [
    user.name,
    user.email,
    user.number,
    user.role
  ]);

  conn.release();

  return result;
}

// Buscar usuário por ID
async function findUserByID(id) {
  const conn = await configDatabase.getConnection();

  const sql = `
    SELECT id, name, email, number, role, created_at
    FROM users
    WHERE id = ?
  `;

  const rows = await conn.query(sql, [id]);

  conn.release();

  return rows[0];
}

// Buscar usuário por email
async function findUserByEmail(email) {
  const conn = await configDatabase.getConnection();

  const sql = `
    SELECT * FROM users WHERE email = ?
  `;

  const rows = await conn.query(sql, [email]);

  conn.release();

  return rows[0];
}

// Listar todos usuários
async function getAllUsers() {
  const conn = await configDatabase.getConnection();

  const sql = `
    SELECT id, name, email, number, role, created_at
    FROM users
  `;

  const rows = await conn.query(sql);

  conn.release();

  return rows;
}

// Deletar usuário
async function deleteUser(id) {
  const conn = await configDatabase.getConnection();

  const sql = `
    DELETE FROM users WHERE id = ?
  `;

  const result = await conn.query(sql, [id]);

  conn.release();

  return result;
}

// Atualizar usuário
async function updateUser(id, user) {
  const conn = await configDatabase.getConnection();

  const sql = `
    UPDATE users
    SET name = ?, email = ?, number = ?, role = ?
    WHERE id = ?
  `;

  const result = await conn.query(sql, [
    user.name,
    user.email,
    user.number,
    user.role,
    id
  ]);

  conn.release();

  return result;
}

module.exports = {
  createUser,
  findUserByEmail,
  findUserByID,
  getAllUsers,
  deleteUser,
  updateUser
};