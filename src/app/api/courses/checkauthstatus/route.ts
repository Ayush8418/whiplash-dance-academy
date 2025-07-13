'use client'
import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest){
    try{
        const id = getDataFromToken(request);
        if(id == "") {
            return NextResponse.json({message: "uer is not authenticated", isLoggedIn: false},{status: 200});
        }
        return NextResponse.json({message: "uer is authenticated", isLoggedIn: true},{status: 200});
    }
    catch(error: any){
        return NextResponse.json({message: "fail to fetch", isLoggedIn: true}, {status: 500});
    }
}
