// import mongoose
const mongoose=require('mongoose')
// connection string 
const connectionString=process.env.DATABASE
mongoose.connect(connectionString,{
    useUnifiedTopology: true ,
    useNewUrlParser :true
}).then(()=>{
    console.log("mangodb atlas connected to ems server!!!");
}).catch((err)=>{
    console.error("mongodb connection failed");
})
