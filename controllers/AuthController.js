import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();
export const authLogin = async (req, res) => {
    // authenticate user
    const username = req.body.username;
    const user = {name: username};
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken });
}