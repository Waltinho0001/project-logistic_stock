const userModel = require("../../models/userModel.js");

async function getAllUsers (req, res){
  try{
    const users = await userModel.getAllUsers();
    
    res.status(200).json(users);
    
  }catch(error){
    res.status(500).json({
      error: "Falha ao buscar todos os usuários"
    });
  }
}

module.exports = getAllUsers;