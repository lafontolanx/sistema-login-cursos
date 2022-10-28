const express = require('express');
const bcrypt = require('bcrypt');
const app = express();

app.use(express.json());

const users = [];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = { email: req.body.email, password: hashedPassword };

        users.push(user);
        res.status(201).send();
    } catch (error) {
        console.log(error)
        res.status(500).send();
    }
});

app.delete('/users', (req, res) => {
    users.filter(user => user.email !== req.body.email);
    res.status(200).send();
});

app.listen(3001);