import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function getDataFromToken(request : NextRequest){
    const token = request.cookies.get("token")?.value || "";

    if(token == ""){
        return "";
    }

    const decoded : any= jwt.verify(token, process.env.TOKEN_SECRET!)
    return decoded.id
}