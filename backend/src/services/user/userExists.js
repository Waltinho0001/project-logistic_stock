const userModel = require("../../models/userModel.js");

async function userExists (email){
  const user = await userModel.findUserByEmail(email);
  
  if(user){
    throw new Error("Usuário já existente com este Email!");
  }
}

module.exports = userExists;