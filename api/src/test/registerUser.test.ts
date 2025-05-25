/// <reference types="jest"/>
import 'dotenv/config'
import registerUser from '../logic/registerUser'
import { ContentError, DupliciteError, MatchError } from 'com/errors';
import sqlTest from '../db/testdb';
import { UserRequestBody, User } from '../types/User';

describe('registerUser',() => {
    beforeEach(async () => {
        await sqlTest`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(50),
            username VARCHAR(50) UNIQUE,
            email VARCHAR(100) UNIQUE,
            password VARCHAR(70)
        )`;

        await sqlTest`DELETE FROM users`;
    });

    it('should register a new user', async () => {
        const user: UserRequestBody = {
            name: 'pepito',
            username: 'testuser',
            password: 'password123',
            passwordRepeat: 'password123',
            email: 'test@user.com'
        };

        await registerUser(user, sqlTest);

        const result: User[] = await sqlTest`SELECT * FROM users WHERE username = ${user.username}`;
        console.log('Query result:', result); 

        expect(result[0]).toBeDefined;
        expect(result[0].username).toEqual(user.username);
        expect(result[0].email).toEqual(user.email);
    });

    afterAll(async () => {
        await sqlTest.end()
    })
});
