const express = require('express');
const { dirname } = require('path');
const app = express();
const port = 8000;
const path = require('path');
const publicPath = path.resolve(__dirname, "./public")

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "view/index.html"))
});

app.listen(port, () => {
    console.log('app funcional en la url http://localhost:' + port)
});

app.use(express.static(publicPath));