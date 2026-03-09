function numberUserValidator(number, errors){
  if(!number){
    errors.push("O número é obrigatório");
  }
}

module.exports = numberUserValidator;