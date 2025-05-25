import { Sql } from "postgres";

async function startDb(db:Sql) {
    try {
        db `CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(50),
            username VARCHAR(50) UNIQUE,
            email VARCHAR(100) UNIQUE,
            password VARCHAR(70)
            )`

            console.log("table created")
        
    } catch (error) {
        console.log(error)
    }
}

export default startDb