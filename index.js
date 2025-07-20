// const express = require("express");
// const app = express();

// app.listen(3000,()=>{
//     console.log("App is running sucessfully")
// });

// use -> nodemon -> for automation
// nodemon index.js

const express = require('express')
const app = express()

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());

// import routes for TODO API
const todoRoutes = require("./routes/todo");
// mount the todo API routes
app.use("/api/v1",todoRoutes);


// connect to the database
const dbConnect = require("./config/database");
dbConnect();


// default Route
app.get('/',(req,res)=>{
    res.send(`<h1>This is home page</h1>`)
})

// start the server
app.listen(PORT,()=>{
    console.log(`Server is started at ${PORT}`)
})