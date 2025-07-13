import {connect} from '@/dbConfig/dbConfig';
import { sendEmail } from '@/helper/mailer';
import User from '@/models/userModel';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse, userAgent } from 'next/server';

connect()

export async function POST(request: NextRequest){
    try{
        const reqbody = await request.json();
        const {password, token}: any = reqbody;
        const user = await User.findOne({
            forgotPasswordToken : token,
            forgotPasswordTokenExpiry: {$gt: Date.now()}
        })

        if(!user){
            return NextResponse.json({message:"Link expired", error: "Token Expired", success: false}, {status: 400});
        }
        else{
            const saltRounds = 10;
            const passHash = bcrypt.hashSync(password, saltRounds);

            user.password = passHash;
            user.forgotPasswordToken = undefined;
            user.forgotPasswordTokenExpiry = undefined;

            await user.save();

            return NextResponse.json({message: "user's new password saved.", success: true},{status: 200});
        }
    }
    catch(error : any){
        return NextResponse.json({error: error.message, message: "fail to reset password", success: false}, {status: 400});
    }

}