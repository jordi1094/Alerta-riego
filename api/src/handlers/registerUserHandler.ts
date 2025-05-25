import { Request, Response } from 'express';
import logic from '../logic/index.js'
import { UserRequestBody } from '../types/User.js';

export default function registerUserHandler(
    req: Request<{}, {}, UserRequestBody>,
    res: Response,
): void {
    const { name, email, username, password, passwordRepeat } = req.body;
    const db = req.app.locals.db
    const user = {
        name: name,
        email: email,
        username: username,
        password: password,
        passwordRepeat: passwordRepeat
    }
    logic.registerUser(user, db)
    res.send('User Created')
}
