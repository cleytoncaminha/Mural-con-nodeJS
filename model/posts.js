module.exports = {

posts: [
    {
    id: "asdasdasd",
    title: "teste",
    description: "teste do mural de avisos"
},
],

getALL(){
    return this.posts;
},

newPost(title,description){
        this.posts.push({id: generateID(), title, description})
}



}


function generateID(){
    return Math.random().toString(36).substring(2,9)
}