import bcrypt from 'bcryptjs'
import {DupliciteError, MatchError} from 'com/errors'
import validation from 'com/validations'
import {Sql} from 'postgres'
import { UserRequestBody } from '../types/User'
import { use } from 'chai'

async function registerUser(user: UserRequestBody, db: Sql<{}>): Promise<void | {error: Error}>{
    let cryptedPassword: string 
    if(user.password === user.passwordRepeat){
    cryptedPassword = await bcrypt.hash(user.password, 12)  
    }else{
        return {error: new MatchError('password and password are diferents')}
    }
    db `CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(50),
        username VARCHAR(50) UNIQUE,
        email VARCHAR(100) UNIQUE,
        password VARCHAR(70)
        )`   
    db`SELECT * FROM users WHERE email `

    db `INSERT INTO users (name, username, email, password)
        VALUES (${user.name},${user.username}, ${user.email}, ${cryptedPassword})`
}

export default registerUser
