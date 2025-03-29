const mongoose = require('mongoose');
require('dotenv').config();
// const mongoURl = 'mongodb://localhost:27017/firstdatabase';
const mongoURl = process.env.mongourl
 mongoose.connect(mongoURl);
 const db = mongoose.connection;
 // connection between mongodb and express;
// event listeners 
db.on('connected' , ()=>
{
    console.log("database is connected ");
})
db.on('error', ()=>
{
    console.log("Error while connecting to datbase");
})
db.on('disconnected' ,()=>
{
    console.log("database disconnected ");
})
module.exports = db;