import 'dotenv/config';
import sqlTest from '../config/testdb';
import bcrypt from 'bcryptjs';
import {expect} from 'chai';

import { ContentError, DupliciteError, MatchError }from 'com/errors';
import { before, beforeEach, describe } from 'node:test';

describe('registerUser', () => {
    before(() => { await sql`DELETE FROM users`})

    beforeEach(() => {await sql`DELETE FROM users`})

    it('should register a new user', async () => {
        const user = {
            username: 'testuser',
            password: 'password123',
            repeatPassword: 'password123',
            email: 'test@user.com'
        };
        registerUserHandler(user);
            .then((sqlTest`SELECT * FROM users WHERE username = ${user.username}`))
            .then((result) => {
                expect(result).to.have.lengthOf(1);
                expect(result[0].username).to.equal(user.username);
                expect(result[0].email).to.equal(user.email);
                expect(result[0].password).to.not.equal(user.password);
            }
        );
    })
})
