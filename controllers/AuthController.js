import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

const posts = [
    {
      "username": "admin",
      "title": "admin"
    },
    {
      "username": "user1",
      "title": "User 1"
    }
];

export const getPosts = (req, res) => {
    res.json(posts.filter(e => e.username === req.user.name));
}

export const authLogin = async (req, res) => {
    // authenticate user
    const username = req.body.username;
    const user = {name: username};
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken });
}