import mongoose from 'mongoose';

export async function connect(){
    try{
        await mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on("conneccted",()=>{
            console.log("DB connected");
        })
        connection.on("error", ()=>{
            console.log("DB connection fail")
        })
    }
    catch(error: any){
        console.log("connection failed");
        console.log(error);
    }
}