import z from "zod";
import emailValidation from "./emailValidation.js";
import nameValidation from "./nameValidation.js";

import passwordValidation from "./passwordValidation.js";


const userRequestBodyValidation = z.object({
    name: nameValidation,
    email: emailValidation,
    username: nameValidation,
    password: passwordValidation,
    passwordRepeat: passwordValidation
})

export default userRequestBodyValidation