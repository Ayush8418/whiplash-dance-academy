import { connect } from "@/dbConfig/dbConfig";
import Customer from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();
 
export async function POST(request: NextRequest){
    try{
        const url = new URL(request.url);
        const token = url.searchParams.get("token");
        console.log(token);

        const customer = await Customer.findOne({
            verifyToken : token,
            verifyTokenExpiry: {$gt: Date.now()}
        })

        if(!customer){
            return NextResponse.json({error: "Token Expired"},{status: 400});
        }
        else{
            // console.log(customer);
            customer.isVerified = true;
            customer.verifyToken = undefined;
            customer.verifyTokenExpiry = undefined;

            await customer.save();

            return NextResponse.json({message: "email verified", success: true},{status: 203});
        }
    }
    catch(error: any){
        console.log(error);
        return NextResponse.json({messsage: "fail to verify", error: error.message}, {status: 500});
    }
}