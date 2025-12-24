const API_DOMAIN=process.env.NEXT_PUBLIC_API_DOMAIN

export async function getAllProduct(){
    try{
        const response=await fetch(`${API_DOMAIN}/product`);
        const res=await response.json();
        return res;
    }catch(error){
        return [];
    }
}

export async function getAllTest(){
    try{
        const response=await fetch(`${API_DOMAIN}/product`);
         throw new Error("Error while fetching Test");
        return res;
    }catch(error){
        return error.message;
    }
}