const mongoose = require('mongoose');

const personschema = mongoose.Schema({
    name :{
        type : String,
        required :true
    },
    age :{
        type : Number
    },
    work :
    {
        type :String ,
        enum : ['chef','waiter','manager']
    },
    email :
    {
       type:String,
       unique : true
    }

})
const person = mongoose.model('person',personschema);
module.exports = person;