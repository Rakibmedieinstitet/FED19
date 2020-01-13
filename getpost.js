const express = require("express");

const app = express();

//app.use middleware
//express.json() till vanligt js object

app.use(express.json())



//övning get
app.get("/kurs", (req, res)=>{
    res.send({ kursnamn: "node js",  längd: 10})
})

const kurser = [];

app.post("/kurser", (req, res)=>{
 const kurs = {
   kursNamn: req.body.kursNamn,
   längd:9 
 };
 kurser.push(kurs);
 res.send(kurser);
})

app.get("/kurser", (req, res)=>{
res.send(kurser)
})
const port = process.env.PORT || 5001

app.listen(port, ()=> console.log("server is ready"));