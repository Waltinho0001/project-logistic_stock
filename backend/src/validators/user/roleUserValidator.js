function roleUserValidstor(role, errors){
  const allowedRoles = ["admin", "operator"];

  if(!allowedRoles.includes(role)){
    errors.push("Cargo inválido");
  }
}

module.exports = roleUserValidstor;