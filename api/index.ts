import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from 'cors';
import {db} from './config/db'

const {PORT} = process.env

db.connect()
  .then(() => {
    const api = express();
    api.use(cors());

    const jsonBodyParser = express.json({ strict: true, type: 'application/json' });

    api.get('/', (req: Request, res: Response) => {
      res.send('Hello, world!');
    });

    api.listen(PORT, () => console.log(`API running on port ${PORT}`));
  })
  .catch((error) => console.error('Error connecting to the database', error));
