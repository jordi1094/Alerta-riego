import bcrypt from 'bcryptjs'
import {DupliciteError, MatchError} from 'com/dist/errors/index.js'
import validation from 'com/dist/validations/index.js'
import {Sql} from 'postgres'
import { UserRequestBody } from '../types/User.js'


/**
 * Register a new user if the email and username are not already registered in the database.
 * 
 * 1. Compares password and passwordRepeat.
 * 2. Hashes the password with bcryp.
 * 3. Validates that email and username are not already in use.
 * 4. Inserts the new iser into the database.
 * @param {UserRequestBody}user - The user data to register, including name, username, email, and passwords.
 * @param {Sql<{}>}db - The satabase connection used to perform SQL queries.
 * @returns {Promise<void | {error: Error}>} - Return nothing on succes, or and object with an error on failure.
 */
async function registerUser(user: UserRequestBody, db: Sql<{}>): Promise<void | {error: Error}>{
    let cryptedPassword: string 
    if(user.password === user.passwordRepeat){
    cryptedPassword = await bcrypt.hash(user.password, 12)  
    }else{
        return {error: new MatchError('password and password are diferents')}
    }
    
    const existingEmail = await  db`SELECT * FROM users WHERE email = ${user.email}`
    if(existingEmail.length > 0){
        return ({error: new DupliciteError('Email already registered.')})
    }

    const existingUsername = await db`SELECT * FROM users WHERE username = ${user.username}`
    if(existingUsername.length > 0){
        return ({error: new DupliciteError('Username already registered.')})
    }

    await db `INSERT INTO users (name, username, email, password)
        VALUES (${user.name},${user.username}, ${user.email}, ${cryptedPassword})`
}

export default registerUser
