const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv").config();
const cors = require("cors")
const app = express();
const port=process.env.PORT|4000;

app.use(express.json());
app.use(cors());

const routes = require("./routes/registrationroute")
mongoose.connect(`${process.env.MONGO_URI}`).then(()=> console.log("connected")).catch(()=>{
    console.log("Error");
})

app.use('/api',routes);

app.listen(port,function(){
    console.log("server is running");
})
