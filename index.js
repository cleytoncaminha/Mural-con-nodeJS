const posts = require('./model/posts');
const express = require('express');
const PORT = 3000;
const app = express();
const path = require('path')
const apiRoute = require('./routes/api');


app.use(express.json());

app.use('/api', apiRoute)

app.use('/',express.static(path.join(__dirname,"public")));


app.listen(PORT, () => {
    console.log("server rodando na porta ", PORT)
});