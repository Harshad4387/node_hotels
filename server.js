const express = require('express');
const app = express();
const db = require('./db');

const bodyparser = require('body-parser');
app.use(bodyparser.json())

// routes import and calls
const personroutes = require('./routes/personroutes')
app.use('/Person',personroutes);

const menurouter = require('./routes/menuroutes');
app.use('/menu' , menurouter);

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
})