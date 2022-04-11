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


// export const editUserName = (req, res) => {
//     const {id} = req.params; 
//     const { name, password, phone, photo } = req.body;
//     if(name) {

//     }
//     if(password) {

//     } 
//     if(phone) {

//     }
//     if(photo) {

//     }
// }