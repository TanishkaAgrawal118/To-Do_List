import mongoose from "mongoose";
import 'dotenv/config';

export async function configureDb(){
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("Db connected");
    } catch{
        console.log(error);
    }
}