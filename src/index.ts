import dotenv from 'dotenv'
import express from 'express';
import morgan from 'morgan';
import notesRouter from './routes/note_routes'

dotenv.config();
const app = express();

app.use(express.json())
app.use(morgan('tiny'))

// ROUTER FOR NOTES

app.use('/notes',notesRouter)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8000, () => {
  console.log('Server running on port 5000');
});
