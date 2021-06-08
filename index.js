const posts = require('./model/posts');
const express = require('express');
const PORT = 3000;
const app = express();



app.get("/all",(req,res)=>[
    res.json(JSON.stringify(posts.getALL()))
])

app.use(express.json())
app.post("/new",(req,res)=>{
    
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title,description);
    res.send("post adicionado")

});
app.listen(PORT, () => {
    console.log("server rodando na porta ", PORT)
});