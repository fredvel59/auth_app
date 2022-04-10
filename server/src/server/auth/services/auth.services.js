import Users from "../../users/models/users.models.js";
import bcrypt from 'bcryptjs';
import uid from '../helpers/uid.js';

export const createUser = async (req, res) => {
    const { email, password, name } = req.body;
    const emailExists = await Users.findOne({ where: { email } })
    if (!emailExists) {
        if(name) {
            if (name.length > 6 & name.length < 25) {
                const passwd = await bcrypt.hash(password, 10)
                try {
                    await Users.create({
                        id: uid(),
                        name,
                        email,
                        password: passwd
                    });
                    res.json({ response: 200, message: `the user: ${name}, was created successfully` })
                } catch (err) {
                    res.send(err)
                }
            } else {
                res.json({ response: 400, message: 'your name must contain greater than 5 characterers and less than 25' })
            }
        }else {
            res.json({response: 400, message: 'Add your name please'})
        }
    } else {
        res.json({ response: 400, message: `Your email is already used, please send a new email` })
    }
}
