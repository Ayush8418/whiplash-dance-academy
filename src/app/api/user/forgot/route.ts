import { sendEmail } from "@/helper/mailer";
import Customer from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    try{
        const reqData = await request.json();
        const {email} : any = reqData;
        // console.log("email: ",email);
        const customer = await Customer.findOne({email: email});
        if(!customer){
            return NextResponse.json({error: "user Does not exist", message: "No User Found", success: false}, {status: 400});
        }
        else{
            const mailres = await sendEmail({email: email, emailType: "RESET", customerId: customer._id});
            const response = NextResponse.json({message: "recover your password using mail", success: true}, {status: 200});
            response.cookies.set("token", "", {
                httpOnly : true,
                expires: new Date(0)
            })
            return response;
        }
    }
    catch(error: any){
        return NextResponse.json({message: "fail request", error: error.message, success: false}, {status: 500});
    }
}
