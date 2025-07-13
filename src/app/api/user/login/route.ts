import {connect} from '@/dbConfig/dbConfig';
import Customer from '@/models/userModel';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import jwt from "jsonwebtoken";
import { sendEmail } from '@/helper/mailer';

connect()

export async function POST(request: NextRequest){
    
    try{
        const reqData = await request.json();
        const {email, password} : any = reqData;
        await sendEmail({email: "as3874182@gmail.com", emailType:"login", customerId:"dkdk", username:"someone logged in"});
        const customer = await Customer.findOne({email: email});
        if(!customer){
            return NextResponse.json({message: "user does not exists", error: "user does not exists", success: false},{status: 400});
        }
        else{
            const valid = await bcrypt.compare(password, customer.password);
            if(valid){
                if(!(customer.isVerified)){
                    const mailres = await sendEmail({email: email, emailType: "VERIFY", customerId: customer._id, username: customer.username});
                    return NextResponse.json({message: "verify your mail first", success: false}, {status: 403});
                }
                else{
                    const tokenData = {
                        id: customer._id,
                        username: customer.username,
                        email: customer.email
                    }
                    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: '1d' });

                    const response = NextResponse.json({
                        message: "logged in",
                        success: true,
                        token: token
                    })

                    response.cookies.set("token", token, {
                        httpOnly: true
                    })

                    return response;
                }
            }
            else{
                return NextResponse.json({error: "password is wrong", message: "wrong password", success: false},{status: 400});
            }
        }
    }
    catch(error : any){
        return NextResponse.json({message: "login failed",error: error.message, success: false}, {status: 500});
    }
}
