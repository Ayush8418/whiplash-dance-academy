import {connect} from '@/dbConfig/dbConfig';
// import { sendEmail } from '@/helper/mailer';
import Customer from '@/models/userModel';
// import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
// import jwt from "jsonwebtoken";
import { getDataFromToken } from '@/helper/getDataFromToken';

connect()

export async function GET(request: NextRequest){
    const id = getDataFromToken(request);
    console.log(id);
    const customer = await Customer.findById(id);
    if(!customer){
        return NextResponse.json({message: "user not found", error: "user not found", success: false},{status: 400});
    }
    else{
        return NextResponse.json({message: "user found", user: customer, success: true},{status: 200});
    }
}