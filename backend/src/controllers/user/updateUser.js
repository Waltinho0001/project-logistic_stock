const userModel = require("../../models/userModel.js");

async function updateUser(req, res){
  try{
    const { id } = req.params;
    
    const { name, email, password, number, role } = req.body;
    
    const result = await userModel.updateUser(id, user);
    
    if(result.affectedRows === 0){
      return res.status.json({
        error: "Nenhum usuário encontrado."
      });
    }
    
    res.status(200).json({
      message: "Usuário atualizado com sucesso"
    });
    
  } catch(error){
    res.status(500).json({
      error: "Falha ao atualizar o usuário!"
    });
  }
}

module.exports = updateUser;