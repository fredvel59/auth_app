// code to verify the token
import dotenv from '../../../config/dotenv/config.js'
import jwt from 'jsonwebtoken';


export const verifyToken = (req, res, next) => {
    const token = req.headers['access-token'];
    if(token) {
        jwt.verify(token, dotenv.secretKey, (err, payload) => {
            if(err) {
                res.json({auth: false, message: "Your token is not valid"})
            }else {
                req.id = payload.id;
                next();
            }
        })
    }else {
        res.json({auth: false, message: "You don't have access here, you need a access-token"})
    }
};