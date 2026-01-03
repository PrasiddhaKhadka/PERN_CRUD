import express, {Request, Response, Router} from 'express';

const notesRouter:Router = express.Router()

notesRouter.get('/',(req:Request,res:Response):void =>{
    res.status(200).json({
        msg:'Success'
    })
})


export default notesRouter;