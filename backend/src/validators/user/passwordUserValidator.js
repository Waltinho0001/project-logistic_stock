function passwordUserValidator(password, errors){
  if(!password || password.trim() === ""){
    errors.push("A senha é ohrigatória");
  }
  
  if(password.length < 8){
    errors.push("A senha deve conter no mínimo 8 caracteres");
  }
}

module.exports = passwordUserValidator;