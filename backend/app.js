const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=> {
    console.log("get request --", req.body)
    res.send("Welcome to express");
})

// app.post("/", (req, res)=>{
//     console.log("request--", req.body)
//     res.send("Hello World!")
// })

// app.put("/", (req, res)=>{
//     console.log("put reqest--", req.body)
//     res.send("hello from put request")
// })

app.listen(port, ()=>{
    console.log(`App running on port ${port}`);
    console.log("Hello World");
})