import 'dotenv/config'
import { Client } from 'pg'

const{DB_USER, DB_HOST, DB_NAME, DB_PORT} = process.env

export const  db = new Client({
    user:DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    port: Number(DB_PORT)
})