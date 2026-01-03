import { Request,Response } from "express"
import { prisma  } from "../lib/prisma"

const getNotes = async (req:Request,res:Response):Promise<void>=>{ 
    const notes = await prisma.post.findMany()
    res.status(200).json({
        msg:'Success',
        body:notes
    })
}

const getNotesDetails = async(req:Request,res:Response):Promise<void>=>{ 
    const {id} = req.params;

    // converting the strings to number:
     const noteId = id ? parseInt(id, 10) : undefined;

     if(typeof noteId === undefined){
        res.status(400).json({
            msg: 'Invalid note ID',
            body: []
        });
        return;
     }
     
    console.log(noteId)
    const notes = await prisma.post.findUnique({
        where:{
            id:noteId
        }
    })
    res.status(200).json({
        msg:'Success',
        body:notes
    })
}

const createNotes = async(req:Request,res:Response):Promise<void>=>{
    const {title, content} = req.body
    const post = await prisma.post.create({
        data: {
            title:title,
            content:content
        }
    })
    res.status(200).json({
        msg:'Success',
        body:post
    })
}

export {getNotes, getNotesDetails,createNotes}