const userModel = require("../../models/userModel.js");

async function deleteUser(req, res){
  try{
    const { id } = req.params;
    
    const result = await userModel.deleteUser(id);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({
        error: "Usuário não encontrado"
      });
    }

    res.status(200).json({
      message: "Usuário deletado com sucesso"
    });
  } catch(error){
    res.status(500).json({
      error: "Falha ao deletsr o usuário!"
    });
  }
}

module.exports = deleteUser;