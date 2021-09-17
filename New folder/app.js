
const express= require("express");
require("./data/db");
const bkrank=require("./data/bk");

const app= express();
const port = process.env.port ||3000;

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// update all api data using post man manualy
app.post("/data",async(req,res )=>{
    try{
        const newver=new bkrank(req.body)
        console.log(req.body)
        const var1=await newver.save();
       

        
    }catch(e){
        
    }
})

app.get("/data",async(req,res )=>{
    try{
        const getbook=await bkrank.find({});
        
        res.send(getbook);
        
    }catch(e){
        
    }
})
app.get("/data/:Name",async(req,res )=>{
    try{
        const _id=req.params.Name;
        const getbook=await bkrank.findOne({Name:_id});
        
        res.send(getbook);
        
    }catch(e){
        
    }
})




app.listen(port,()=>{
    console.log(`connection is live at port no${port}`)
})