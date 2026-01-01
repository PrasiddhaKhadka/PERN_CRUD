import dotenv from 'dotenv'
import express from 'express';
import morgan from 'morgan';

dotenv.config();
const app = express();

app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8000, () => {
  console.log('Server running on port 5000');
});
