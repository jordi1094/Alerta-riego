import { Request, Response } from 'express';
import logic from '../logic/index.js'
import { UserRequestBody } from '../types/User.js';
import { userRequestBodyValidation } from 'com/dist/validations/index.js';



export default  async function registerUserHandler(
    req: Request<{}, {}, UserRequestBody>,
    res: Response,
): Promise<void> {
    const { name, email, username, password, passwordRepeat } = req.body;
    const db = req.app.locals.db
    const userRequest = {
        name: name,
        email: email,
        username: username,
        password: password,
        passwordRepeat: passwordRepeat
    }
<<<<<<< HEAD
    const validation = userRequestBodyValidation.safeParse(userRequest);
    if(!validation.success){
        res.status(400).json({error: validation.error.flatten()})
=======
    const validation  = userRequestBodyValidation.safeParse(userRequest)
    if(!validation.success){
        res.status(422).json({error: validation.error.flatten()})
>>>>>>> e7ee65715dac85e47b0fb1e4110e9878ae9535c3
        return
    }

    const registerResult:void| {error:Error} = await logic.registerUser(userRequest, db)
    
    if(!registerResult){
        res.status(201).json({ message: "User successfully registered." })
        return
    }else{
        res.status(409).json({error: registerResult.error.message})
        return
    }

}
