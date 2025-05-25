import 'dotenv/config'
import postgres from 'postgres'


if (!process.env.DATABASE_URL_TEST) {
    throw new Error('DATABASE_URL is not defined in the environment variables')
}

const connectionString:string = process.env.DATABASE_URL_TEST

const sqlTest = postgres(connectionString,
    {
        ssl: 'require'
    })

export default sqlTest