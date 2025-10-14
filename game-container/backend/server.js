const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

console.log('starting')

// Creates server
const app = express();
app.use(cors())
app.use(express.json())

// Unfortunately still resets with server
let users = [];

app.post('/register', async (req, res) => {
    console.log("/register called")
    const { email, password } = req.body;

    if (users.find(u => u.email === email)) {
        return res.status(400).json({ message: 'Email already exists' })
    } 

    // Hash password for security, higher number of scramble takes longer
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

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});