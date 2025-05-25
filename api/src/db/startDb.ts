import { Sql } from "postgres";

async function startDb(db:Sql) {
    db `CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(50),
        username VARCHAR(50) UNIQUE,
        email VARCHAR(100) UNIQUE,
        password VARCHAR(70)
        )`
    
}

export default startDb