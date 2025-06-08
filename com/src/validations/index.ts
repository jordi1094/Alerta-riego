import nameValidation from './Schemas/user/nameValidation'
import passwordValidation from './Schemas/user/passwordValidation'
import emailValidation from './Schemas/user/emailValidation'
import userRequestBodyValidation from './Schemas/user/userRequesBodyValidation';


const validateSchemas = {
  nameValidation,
  passwordValidation,
  emailValidation,
  userRequestBodyValidation
};

export default validateSchemas;

export {nameValidation, passwordValidation, emailValidation, userRequestBodyValidation}

