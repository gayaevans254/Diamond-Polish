const express = require("express");
const dotenv = require("dotenv").config()
const ejs = require("ejs");
const path = require("path");
const nodemailer = require("nodemailer")
 

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"PUBLIC")))

const Transport = nodemailer.createTransport({
    
})


app.get("/",(req,res)=>{
    const companyName = "Diamond Polish"
    const year = Date.now().toString()
    res.render("index.ejs",{
        companyName,
        year
    })
})

app.post("/contact",(req,res)=>{
    console.log(req.body)
})


app.listen(process.env.PORT || 3200,(err)=>{
    if(err){
        console.log(err)
        return
    }

    console.log(`connected on port http://www.localhost:${process.env.PORT}`)
})