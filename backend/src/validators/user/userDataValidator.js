const nameUserValidator = require("./nameUserValidator.js");
const emailUserValidator = require("./emailUserValidator.js");
const passwordUserValidator = require("./passwordUserValidator.js");
const numberUserValidator = require("./numberUserValidator.js");
const roleUserValidator = require("./roleUserValidator.js");

function userDataValidator(user = {}){
  const errors = [];
  
  const { name, email, password, number, role } = user;
  
  nameUserValidator(name, errors);
  emailUserValidator(email, errors);
  passwordUserValidator(password, errors);
  numberUserValidator(number, errors);
  roleUserValidator(role, errors);
  
  return errors;
}

module.exports = userDataValidator;