const express = require('express');
const router = express.Router();
const app = express();
const posts = require('../model/posts');

express().use(express.json())


router.get("/all",(req,res)=>[
    res.json(JSON.stringify(posts.getALL()))
]);
router.post("/new",(req,res)=>{
    
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title,description);
    res.send("post adicionado")

});


module.exports = router;