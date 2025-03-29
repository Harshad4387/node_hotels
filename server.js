const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const bodyparser = require('body-parser');
app.use(bodyparser.json())
const port = process.env.PORT || 3000 ;

app.get('/' , (req,res)=>
{
    res.send("welcome to hotel");
})
// routes import and calls
const personroutes = require('./routes/personroutes')
app.use('/Person',personroutes);

const menurouter = require('./routes/menuroutes');
app.use('/menu' , menurouter);

app.listen(port, ()=>{
    console.log("server is running on port 3000");
}) 
//new commit is pushed 