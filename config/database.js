// npm i dotenv -> process mei env ko dalnek liye
// npm i mongoose   

const mongoose = require("mongoose")
require ("dotenv"). config();
const dbConnect = () =>{
    mongoose. connect (process.env.DATABASE_URL ,{
        // useqewurtparser:true,
        // useUnifiedTopology: true,
    })
    .then(()=> console.log("DB ka connecetion is sucessfull") )
    .catch( (error) =>{
        console.log("Issue find");
        console.error(error.message);
        // iska kya matlab hai?
        process.exit(1);
    });
}    

module.exports = dbConnect;