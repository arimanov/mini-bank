import express, { Express, Request, Response } from 'express';
import { TestModel, LoginData } from 'mb-shared';
import Database from './src/Database';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

const port = process.env.PORT;
const env: string = process.env.ENV || '';

const data = new Database(env);



app.get('/', async (req: Request, res: Response) => {
  //console.log(TestModel);
  const tables = await data.getCustomers();
  res.send(tables);
  
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});