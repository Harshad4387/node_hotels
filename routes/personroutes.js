const express = require('express');
const router = express.Router();
const person = require('./../Models/person');

router.get('/' ,async (req,res) =>
    {  
        try{
           const data = await person.find();
           console.log("database data shown to user ");
           res.status(500).json(data);
        }
        catch(err)
        {
            console.log("error ocuured");
            res.status(404).json(error );
        }
    
    })
router.post('/', async (req ,res) =>
    {
        try{
                const data = req.body ; //body perser will store data in req.body
                const newperson = person(data);
    
                const response = await newperson.save();
                console.log("data saved successfully");
                res.status(500).json(response);
    
                
        }
        catch(err) {
            console.log('error occured')
            res.status(404).json(error + "internal error ocuured");
        }
    })
   
// paramatrized api calls 
// to get data from person collection according to user input such 
// as chef waiter manager

router.get('/:workperson' , async (req , res) =>
{
    try{ 
        const worktype = req.params.workperson;
        if(worktype == 'chef' || worktype =='manager' || worktype == 'waiter')
        {
            const response = await person.find({work : worktype});
            res.status(500).json(response);

        }
        else 
        {
            res.status(207).json({error : "invalid parametrized "});
        }

    }
    catch (err)
    {
        res.status(404).json({error : "error occured "})
    }
})

router.put('/:id' , async (req,res)=>
{
    try{ 
        const personid = req.params.id;
        const newdata = req.body;

        const response = await person.findByIdAndUpdate(personid,newdata,{
            new : true,
            runValidators : true
        });

        if(!response)
        {
            res.send(404).json({error : "trying to find invalid id"});
        }
        res.status(200).json(response);
        console.log("data updated sucessfully");




    }
    catch (error)
    {
       console.log({error:"error occured during updation"});
    }
})

router.delete('/:id', async(req,res)=>
{
    try{
       const personid = req.params.id;
       const response = await person.findByIdAndDelete(personid);
       if(!response)
       {
         res.status(404).json("person not found");
       }
       console.log("data deleted ");
       res.status(200).json("data deleted from database successfully");
    }
    catch(error)
    {
        console.log("error occured");
    }
})

module.exports = router;