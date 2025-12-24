import connectDatabase from "../../utils/db";
import Product from "../../model/Product";
import { logger } from "../../utils/logger";
import * as Sentry from "@sentry/nextjs";


class SentryExampleAPIError extends Error {
    constructor(message) {
      super(message);
      this.name = "SentryExampleAPIError";
    }
}


export const GET=async()=>{
    const log=logger.child({module:"Get Data"});
    try{
        await connectDatabase();
        const response=await Product.find();
        if(!response){
            logger.info("No Product Present");
            return new Response(JSON.stringify({message:"No Product Found"}),{status:404});
        }
        logger.info(response,"Product Found");
        console.log(response);
        return new Response(JSON.stringify(response),{status:200});
    }catch(error){
        logger.error(error,"Error while fetching data");
        return new Response(JSON.stringify({message:error.message}),{status:400});

    }
}

export const POST=async(request)=>{
    const log=logger.child({module:"Create Product"})
    try{
        await connectDatabase();
        const formData=await request.formData();
        const product = {
            title: formData.get("title"),
            price: Number(formData.get("price")),
            description: formData.get("description"),
            category: formData.get("category"),
            image: formData.get("image"),
            rating: {
              rate: Number(formData.get("rate")),
              count: Number(formData.get("count")),
            },
          };
          log.info("New Product Data",product);
          const response=await Product.create(product);
          if(!response){
            Sentry.logger.info("Sentry example API called");
            throw new SentryExampleAPIError(
              "Error while creating new Product..",
            );
            log.error({module:"Create Product"},"Error while creating product")
          }
          return  Response.redirect(process.env.NEXT_AUTH_URL);

    }catch(error){
        Sentry.logger.error("Error while creating new Product");
        throw new SentryExampleAPIError("Error while creating new Product");
        log.error(error,"Error while creating new Product");
        return new Response(JSON.stringify({message:"Error while creating new Product"}),{status:400});

    }

}