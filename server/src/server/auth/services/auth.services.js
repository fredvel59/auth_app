import Users from "../../users/models/users.models.js";
import bcrypt from 'bcryptjs'; // to hashing passwords
import uid from '../helpers/uid.js'; // to generate uniques ids
import confirmEmail from "../helpers/emailer.js";
import generateString from "../helpers/string.js";
// import existsEmail from "../helpers/email.exists.js";
// import existsEmail from 'email-existence';
import jwt from "jsonwebtoken";
import dotenv from '../../../config/dotenv/config.js';


export const createUser = async (req, res) => {
    const { email, password, name } = req.body;
    const emailExists = await Users.findOne({ where: { email } })
    if (!emailExists) {
        if (name.length > 6 & name.length < 25) {
            if (password.length > 6 & password.length < 25) {
                if (email.length > 5) {
                    const passwd = await bcrypt.hash(password, 10)
                    try {
                        const user = await Users.create({
                            id: uid(),
                            name,
                            email,
                            key_email: generateString(12),
                            password: passwd
                        });
                        confirmEmail(email, user.key_email, name);
                        res.json({
                            response: 200,
                            message: `the user: ${name}, was created successfully, we sent you an email, now you need to confirm your email`
                        })
                    } catch (err) {
                        res.send(err)
                    }
                } else {
                    res.json({ response: 400, message: 'Your email is not exists please add a valid email' })
                }

            } else {
                res.json({ response: 400, message: 'your password must be greater than 6 characterers and less than 25' })
            }
        } else {
            res.json({ response: 400, message: 'your name must contain greater than 5 characterers and less than 25' })
        }
    } else {
        res.json({ response: 400, message: `Your email is already used, please send a new email` })
    }
}

export const registerUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await Users.findOne({ where: { email } });
    if (user) {
        if (user.verified) {
            const passwd = await bcrypt.compare(password, user.password);
            if (passwd) {
                const token = jwt.sign({id: user.id}, dotenv.secretKey, {expiresIn: 60*60*24*14})
                res.json({
                    auth: true,
                    token
                })
            } else {
                res.json({
                    auth: false,
                    message: 'Your password is not correct'
                })
            }
        } else {
            res.json({
                auth: false,
                message: 'Your email is not confirmed'
            })
        }
    } else {
        res.json({
            auth: false,
            message: 'your email does not exists, please try again'
        })
    }
}


export const confirm_Email = async (req, res) => {
    // ! DO NOT TOUCH THIS CODE 
    const {id} = req.params;
    const user = await Users.findOne({where: {key_email: id}});
    if(user) {
        user.verified = true;
        user.save();
        res.json({
            message: `${user.name} your email was confirmed successfully`
        })
    }
}