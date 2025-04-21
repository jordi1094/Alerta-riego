import 'dotenv/config'
import postgres from 'postgres'


if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined in the environment variables')
}

const connectionString:string = process.env.DATABASE_URL
const sql = postgres(connectionString,
    {
        ssl: 'require'
    })

export default sql