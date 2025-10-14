// Backend server storage of user data

const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

console.log('starting')

// Creates server
const app = express();
app.use(cors())
app.use(express.json())

let users = [];

app.post('/register', async (req, res) => {
    console.log("Register called in server")
    const { email, password } = req.body;

    if (users.find(u => u.email === email)) {
        return res.status(400).json({ message: 'Email already exists' })
    } 

    // Default username is email
    const newUser = {
        email:email,
        username:email,
        password:password,
        checkouts:{}
    }

    users.push(newUser)

    console.log("new user created with username "+email+" and password "+password)

    res.status(201).json({ message: 'User successfully registered'})

});

app.post('/login', async (req, res) => {
    console.log("Login called in server")
    const { email, password } = req.body;

    const user = users.find(u => (u.email === email && u.password == password));
    if (user) {
        return res.json({
            success: true,
            message: 'Login success',
            user: {
                email:user.email,
                username:user.username,
                checkouts:user.checkouts
            }
        })
    } else {
        res.status(401).json({
            success: false,
            message: 'Invalid email or password'
        })
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});