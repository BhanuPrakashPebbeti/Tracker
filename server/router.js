const express = require('express');
const router = express.Router();
const Driver = require('./model/driverSchema');

router.route('/').get((req,res)=>{
    res.status(200).send("hello from server");
})

router.route('/driverlocation').post(async (req,res)=>{
    const {id,lat,long} = req.body;
    try {
        if(id==='null'){
            const newDriver = new Driver({longitude:long,latitude:lat});
            await newDriver.save();
            res.status(201).json({"driverID":newDriver._id,"msg":"new driver added sucessfully"});
        }
        else{
            const driver = Driver.findOneAndUpdate({_id:id}, {longitude:long,latitude:lat}, {
                new: true
              });
            res.status(201).json({"msg":"location updated"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Internal system Error"});
    }
    
})

module.exports = router;