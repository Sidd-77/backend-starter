import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

// database connections


app.use(express.json());
app.use(cors());


app.get('/', async (req: Request, res: Response) => { 
    res.send('Api is running');
});

const APP_PORT = 3000;

app.listen(APP_PORT, () => {
  console.log(`Server started on port ${APP_PORT}`);
});
