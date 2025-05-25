import z from "zod";
import emailValidation from "./emailValidation";
import nameValidation from "./nameValidation";
import passwordValidation from "./passwordValidation";


const userRequestBodyValidation = z.object({
    name: nameValidation,
    email: emailValidation,
    username: nameValidation,
    password: passwordValidation,
    passwordRepeat: passwordValidation
})

export default userRequestBodyValidation