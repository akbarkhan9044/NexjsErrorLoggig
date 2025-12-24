"use server"

//Server Component
import { logger } from "./logger"
export  async function logClientError(message,errorStack){
logger.error({
    source:"client-component",
    statck:errorStack
},message)
}