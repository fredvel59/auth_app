// this code is to send email
import nodemailer from 'nodemailer';

const url = 'http://localhost:8080/auth/verifyEmail/';

const confirmEmail = (email, key, name) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'fred.vel.dev59@gmail.com',
            pass: 'vaoblcfuawwsmzzp'
        }
    })
    const mailOptions = {
        from: 'fred.vel.dev59@gmail.com',
        to: email,
        subject: 'Confirm Email',
        text: `Hey ${name}, please click in this link to confirm your email: ${url}${key}`
    }
    transporter.sendMail(mailOptions, (_err, _info) => {
        console.log(`Email sent to ${email}`);
    })
}

// console.log(confirmEmail('freddyvelarde59@gmail.com', '123456789', 'google.com/' ));

export default confirmEmail;