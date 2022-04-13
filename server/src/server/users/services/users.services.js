import Users from "../models/users.models.js";

export const getAllUsers = async (_req, res) => {
    const users = await Users.findAll();
    if (users.length > 0) {
        res.send(users);
    } else {
        res.json({
            message: 'there are no users yet'
        })
    }
}


export const editUser = (req, res) => {
    // const {id} = req.params;
    const id = req.id;
    const { name, password, phone } = req.body;
    if(name) {

    }
    if(password) {

    } 
    if(phone) {

    }
}