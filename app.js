const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const publicPath = path.resolve(__dirname, "./public")

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "view/index.html"))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "view/login.html"))
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, "view/register.html"))
});

app.listen(port, () => {
    console.log('app funcional en la url http://localhost:' + port)
});

app.use(express.static(publicPath));