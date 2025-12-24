import mongoose from "mongoose";
import { logger } from "./logger";

const connectDatabase=async()=>{
    try{
        const connection=await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Databse has been connected ${connection.connection.host}`);
    }catch(error){
        logger.error(error,"Error while connecting with Database")
        console.log("Error while connecting with Database");
    }
}

export default connectDatabase;