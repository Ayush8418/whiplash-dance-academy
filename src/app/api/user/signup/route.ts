import {connect} from '@/dbConfig/dbConfig';
import { sendEmail } from '@/helper/mailer';
import Customer from '@/models/userModel';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

connect()

export async function POST(request: NextRequest){
    try{
        const reqData = await request.json();
        const {username, email, password} : any = reqData;
        console.log(username, email, password)
        
        const customer = await Customer.findOne({email});

        console.log(customer);  // -------------
        if(customer){
            return NextResponse.json({error: "user already Exists", message: "user already Exists", success: false}, {status: 401});
        }
        else{
            const saltRounds = 10;
            const hash = await bcrypt.hash(password, saltRounds);
            console.log(hash)
            const newCustomer = new Customer({
                username: username,
                email: email,
                password: hash
            })
            
            const savedCustomer = await newCustomer.save();
            // send varification email;
            const mailres = await sendEmail({email: email, emailType: "VERIFY", customerId: savedCustomer._id.toString(), username: username});

            return NextResponse.json({message: mailres.messageId, success: true, savedCustomer}) 
            
        }

    }
    catch(error : any){
        console.log(error.message)
        return NextResponse.json({error: error.message, message: "fail to signup", success: false}, {status: 500})
    }
}
