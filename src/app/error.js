"use client"
import React,{useEffect} from "react";
import { logClientError } from "./utils/logClientError";
import * as Sentry from "@sentry/nextjs";
export default function Error({error,reset}){
    useEffect(()=>{
        console.log(error);
        Sentry.captureException(error);
        logClientError(error.message,error.stack);
    },[error])
    return(
        <div>
            <h1>Something went wrong.</h1>
            <h2>{error.message}</h2>
            <button onClick={()=>{reset()}}>Reset</button>
        </div>
    )
}