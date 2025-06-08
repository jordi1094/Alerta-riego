import nameValidation from './Schemas/user/nameValidation.js';
import passwordValidation from './Schemas/user/passwordValidation.js';
import emailValidation from './Schemas/user/emailValidation.js';
import userRequestBodyValidation from './Schemas/user/userRequestBodyValidation.js';
const validateSchemas = {
    nameValidation,
    passwordValidation,
    emailValidation,
    userRequestBodyValidation
};
export { nameValidation, passwordValidation, emailValidation, userRequestBodyValidation };
export default validateSchemas;
