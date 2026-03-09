const userModel = require("../../models/userModel.js");

async function findUserByID(req, res){
  try{
    const { id } = req.params;
    
    const user = await userModel.findUserByID(id);
    
    if(!user){
      return res.status(404).json({
        error: "Usuário não encontrado!"
      });
    }else{
      return res.status.json(user);
    }
  }catch(error){
    res.status(500).json({
      error: "Falha ao buscar usuário!"
    });
  }
}

module.exports = findUserByID;