function nameUserValidator(name, errors){
  if(!name || typeof name !== String || name.trim() === ""){
    errors.push("O Campo 'nome' é obrigatório");
  }
}

module.exports = nameUserValidator;