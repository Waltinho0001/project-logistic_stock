const userModel = require("../../models/userModel.js");
const userDataValidator = require("../../validators/user/userDataValidator.js");
const userExists = require("../../services/user/userExists.js");
const hashPassword = require("../../services/hashPassword.js");

async function createUser(req, res){
  try{
    const { name, email, password, number, role } = req.body;
    
    // Validação dos Dados
    userDataValidator({ name, email, password, number, role });
    
    // Confere se o usuário já existe
    await userExists(email);
    
    // Hash da senha
    const hashedPassword = await hashPassword(password);
    
    const result = await userModel.createUser({
      name,
      email,
      password: hashedPassword,
      number,
      role
    });
    
    res.status(201).json({
      message: "Usuário criado com sucesso!",
      userId: result.insertId
    });
  }catch(error){
    res.status(400).json({
      error: "Falha ao criar usuário!",
    });
  }
}

module.exports = createUser;