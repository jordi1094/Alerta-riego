import { Request, Response } from 'express';
import { Sql } from 'postgres';
import logic from '../logic'
import { UserRequestBody } from '../types/User';

export default function registerUserHandler(
    req: Request<{}, {}, UserRequestBody>,
    res: Response,
    db:Sql<{}>
): void {
    const { name, email, username, password, passwordRepeat } = req.body;
    const user = {
        name: name,
        email: email,
        username: username,
        password: password,
        passwordRepeat: passwordRepeat
    }
    logic.registerUser(user, db)
}
