import express from "express";
//importing space




//declaration /intialisation
const app = express();
const PORT= 4000;
//middleware
app.use(express.json())


//routes
app.get('/',(req,res)=>{
    // res.status(200).json{message:'Hi welcome to our first node app'}
    res.status(200).send(`<span style="background-color:Aqua;color:black;font-size:100px">Welcome to our firstapp in nodejs </span>`);
})

app.get('/',(req,res)=>
    res.status(200).send(`<span style="background-color:Aqua;color:black;font-size:100px">welcome to the first endpoint</span>)
)
//running part
app.listen(PORT,()=>{
    console.log (`App is Listening on the PORT ${PORT}`)
})
