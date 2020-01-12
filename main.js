const express=require('express')
//anropa express function
const app=express()
 
//middleware
app.use(express.json());
app.get('/',(req,res)=>res.send('HelloWorld!'))
 
const kurser = [
 {kursNamn: "node js", längd:9},
 {kursNamn: "ArbetsMetodik", längd:4},
]
 
 
//hämta en specifika kur
app.get('/kurser/:id',(req,res)=>{
 req.params.id >kurser.length ? res.status(404).send("objektet finns ej"): res.send(kurser[req.params.id-1])
 
 
}
 
)

  

 
 


const port = process.env.PORT  || 8000
 
app.listen(port,()=>console.log('Serverready' + port))
 
