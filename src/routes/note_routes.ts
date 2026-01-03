import express, {Request, Response, Router} from 'express';
import { getNotes,createNotes, getNotesDetails } from '../controllers/notes_controller';

const notesRouter:Router = express.Router()

notesRouter.get('/',getNotes)
notesRouter.get('/:id',getNotesDetails)
notesRouter.post('/',createNotes)




export default notesRouter;