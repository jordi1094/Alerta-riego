import { Request, Response } from 'express';

interface UserRequestBody {
    name: string;
    email: string;
    username: string;
    password: string;
    passwordRepeat: string;}

export default function registerUserHandler(
    req: Request<{}, {}, UserRequestBody>,
    res: Response
): void {
    const { name, email, username, password, passwordRepeat } = req.body;
}
