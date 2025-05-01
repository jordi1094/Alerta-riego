import 'dotenv/config';;
import bcrypt from 'bcryptjs'
import registerUser from '../logic/registerUser'
import { ContentError, DupliciteError, MatchError }from 'com/errors';
import { before, beforeEach, describe } from 'node:test';
import sqlTest from '../config/testdb.js';
import { UserRequestBody, User } from '../types/User';

describe('registerUser', async () => {
    before(async() => { await sqlTest `CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(50),
        username VARCHAR(50) UNIQUE,
        email VARCHAR(100) UNIQUE,
        password VARCHAR(70)
        )`
    })

    beforeEach(async() => {await sqlTest`DELETE FROM users`})

    it('should register a new user', async () => {
        const user : UserRequestBody= {
            name: 'pepito',
            username: 'testuser',
            password: 'password123',
            passwordRepeat: 'password123',
            email: 'test@user.com'
        };
        await registerUser(user, sqlTest);
        const result: User[] =  await sqlTest`SELECT * FROM users WHERE username = ${user.username}`
                expect(result[0].username).toEqual(user.username);
                expect(result[0].email).toEqual(user.email);
                expect(result[0].password).not.toEqual(user.password);
            }
        );
    })

