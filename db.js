const mongoose = require('mongoose');
const mongoURl = 'mongodb://localhost:27017/firstdatabase';
 mongoose.connect(mongoURl);
 const db = mongoose.connection;
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