import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from 'cors';
import sql from './config/db.js'

const {PORT} = process.env

async function startServer() {
  try{
    await sql`SELECT 1`;

    const api = express()
    api.use(cors())
    api.use(express.json())

    api.get('/', (req: Request, res: Response) => {
      res.send('Hello, world!')
    })

    api.listen(PORT, () => console.log(`✅ API running on port ${PORT}`))
  }catch (error) {
    console.error('❌ Error connecting to the database', error)
  }
  
}

startServer()