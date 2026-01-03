import { prisma } from '../lib/prisma'

// const primsa = new PrismaClient({
//     log:process.env.NODE_ENV === 'development'? ['query','error','warn']:['error']
// })

const connectDb =async()=>{
    try {
        await prisma.$connect()
        console.log('DB CONNECTED')
        
    } catch (error) {
        if(error instanceof Error){
            console.log(`Errro : ${error.message}`)
        }
        process.exit(1)
    }

}

const disconnectDb = async()=>{
    await prisma.$disconnect()
}


export {connectDb,disconnectDb}
