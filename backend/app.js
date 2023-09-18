const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=> {
    res.send("Welcome to express");
})

// app.post("/", (req, res)=>{
//     console.log("request--", req)
//     res.send("Hello World!")
// })

app.listen(port, ()=>{
    console.log(`App running on port ${port}`);
    console.log("Hello World");
})