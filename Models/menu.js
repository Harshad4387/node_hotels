const mongoose =  require('mongoose');
const menuschmea =mongoose.Schema(
    {
         price :
         {
            type : String ,
            required :true 
         },
         taste :
         {
            type : String ,
            enum : ['sweety' ,'salty','spicy']
         },
         is_drink :
         {
            type : Boolean ,
            default : false 
         },
         ingridents :
         {
            type : [String],
            default : []
         },
         num_sales :
         {
             type  : Number ,
             default : 0
         }

    }
)
const menuitems = mongoose.model('menu' , menuschmea);
module.exports = menuitems;