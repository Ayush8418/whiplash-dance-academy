import Customer from '@/models/userModel';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';

export const sendEmail = async({email, emailType, customerId, username}: any) => {
    console.log("sending mail", email, emailType, customerId, username);
    try{
        const saltRounds = 10;
        const hashToken = bcrypt.hashSync(customerId.toString(), saltRounds);
        if(emailType === "VERIFY"){
            await Customer.findByIdAndUpdate(customerId,
                {$set: {verifyToken: hashToken, verifyTokenExpiry: Date.now()+3600000}}
            )
        }
        else if(emailType === "RESET"){
            await Customer.findByIdAndUpdate(customerId,
                {$set: {forgotPasswordToken: hashToken, forgotPasswordTokenExpiry: Date.now()+3600000}}
            )
        }
        // Looking to send emails in production? Check out our Email API/SMTP product!
        const transport = nodemailer.createTransport({
              service: 'gmail',
              host: "smtp.gmail.com",
              port: 587,
              secure: true,
            auth: {
              user: process.env.MY_EMAIL,
              pass: process.env.MY_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.MY_EMAIL,
            to: email,
            subject: emailType,
            html: `<p>
                <a href="${process.env.DOMAIN}/auth/${emailType==="VERIFY"? "verifyemail": "resetpassword"}?token=${hashToken}&username=${username}&email=${email}"> 
                   click here
                </a>
                to ${emailType}
                your email
                </p>`,
        }

        const mailRes = await transport.sendMail(mailOptions);

        return mailRes;
    }
    catch(error: any){
        throw new Error(error.message);
    }
}