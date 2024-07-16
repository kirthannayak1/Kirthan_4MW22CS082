const express=require('express')
const app=express()
const port=9000;
app.use('/myapi',(req,res)=>{
    res.send("Hello world")
})

app.listen(port,()=>{
    console.log("server listening to 9000")
})