const express = require('express');
const router = express.Router();
const menu = require('./../Models/menu');

router.get('/',async (req,res)=>
{
    try{
      const data = await menu.find();
      console.log("data shown on frontend screen");
      res.send(data);
    }
    catch(err)
    {
      res.status(404).json(error);
      
    }
})

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newmenu = menu(data);
        const response = await newmenu.save();
        console.log("menu saved successfully");
        res.status(200).json(response);
    } catch (err) {
        console.log("error while storing menu");
        res.status(500).json(err);
    }
});

router.get('/:taste' , async (req , res)=>
{
   try{
       const tastetype = req.params.taste;
       if(tastetype == 'sweety' || tastetype == 'spicy '|| tastetype == 'salty')
       {
          const response = await menu.find({taste : tastetype});
          res.status(200).json(response);
       }
       else 
       {
         res.status(404).json({error : "invalid endpoint "})
       }

   }
   catch(err)
   {
         console.log(error);
   }
})
router.put('/:id' , async (req,res)=>
{
  try{
     const menuid  = req.params.id;
     const newdata = req.body;
 
     const response = await menu.findByIdAndUpdate(menuid,newdata,{
      new : true,
      runValidators : true
     })
     if(!response)
     {
      res.status(404).json("person not found");
     }
     console.log("updated successfully");
     res.status(200).json(response);

  }
  catch(error) 
  {
      res.status(400).json(error);
  }
})

router.delete('/:id' ,async (req,res)=>
{
   try{
    const menuid = req.params.id;

    const response = await menu.findByIdAndDelete(menuid);
    if(!response)
    {
      res.status(404).json("menu not found ");
    }
    res.status(200).json("data deleted succesfully");
     
   }
   catch (error)
   {
     res.status(400).json(error);
   }
})

module.exports = router;