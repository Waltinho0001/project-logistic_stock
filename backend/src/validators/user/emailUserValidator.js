function isValidEmail(email){
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function emailUserValidator(email, errors){
  if(!email || email.trim() === ""){
    errors.push("O Campo 'email' é obrigatório.");
  }
  
  if(!isValidEmail(email)){
    errors.push("O Email é inválido.");
  }
}

module.exports = emailUserValidator;