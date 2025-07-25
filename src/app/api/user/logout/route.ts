import {connect} from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function GET(request: NextRequest){
    try{
        const res = NextResponse.json({
            message: "logout success",
            success: true
        },{status: 200})
        console.log(res);
        res.cookies.set("token", "", {
            httpOnly : true,
            expires: new Date(0)
        })
        return res;
    }
    catch(error: any){
        return NextResponse.json({error: "logout Failed", message:"logout Failed", success: false },{status: 500});
    }
}