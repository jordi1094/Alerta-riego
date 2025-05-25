import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from 'cors';
import sql from './db/db.js'
import startDb from './db/startDb.js';
import routerHandler from './handlers/index.js';

const {PORT} = process.env

async function startServer() {
  try{
    await sql`SELECT 1`;

    await startDb(sql)
    
    const api = express()
    api.use(cors())
    api.use(express.json())

    api.locals.db = sql
    
    api.get('/', (req: Request, res: Response) => {
      res.send('Hello, world!')
    })

    api.post('/users',routerHandler.registerUserHandler)


    api.listen(PORT, () => console.log(`✅ API running on port ${PORT}`))
  }catch (error) {
    console.error(error)
  }
  
}

startServer()