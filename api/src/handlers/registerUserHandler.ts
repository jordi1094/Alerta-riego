import { Request, Response } from 'express';
import logic from '../logic/index.js'
import { UserRequestBody } from '../types/User.js';
import {userRequestBodyValidation} from 'com/validations/index.js'


export default function registerUserHandler(
    req: Request<{}, {}, UserRequestBody>,
    res: Response,
): void {
    const { name, email, username, password, passwordRepeat } = req.body;
    const db = req.app.locals.db
    const userRequest = {
        name: name,
        email: email,
        username: username,
        password: password,
        passwordRepeat: passwordRepeat
    }
    const validation = userRequestBodyValidation.safeParse(userRequest);
    if(!validation.success){
        res.status(400).json({error: validation.error.flatten()})
        return
    }
    logic.registerUser(userRequest, db)
    res.status(201)
}
