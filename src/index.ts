import { config } from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import notesRouter from './routes/note_routes';
import { connectDb, disconnectDb } from './db/db';

config();
const app = express();

app.use(express.json())
app.use(morgan('tiny'))

// ROUTER FOR NOTES

app.use('/notes',notesRouter)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const startServer = async()=>{
  try {
    await connectDb().then(()=>{
        app.listen(8000, () => {
          console.log('Server running on port 5000');
        });
    })
  } catch (error) {
    await disconnectDb()
    console.log(error)
  }
}

startServer()
