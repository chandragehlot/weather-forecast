const express = require('express');
const cityName = require('../models/cityName');

const router = express.Router();


router.get("/citylist", async(req,res) => {
    const cityList = await cityName.find({}, 
        { _id: 0,
          __v : 0,
          createdAt: 0,
          updatedAt: 0
        }
    );
    console.log("citylist", cityList);
    res.status(200).json(cityList);
})

router.post('/city', async(req,res)=>{
    console.log('request receieved', req.body);
    const { city_name } = req.body;

    const cityObj = {
        cityNameKey : city_name,
        cityName: city_name.toUpperCase(),
        createdAt: Date.now()
     }
    const cityName_inst = await cityName.create(cityObj)
    const resObj = {
        cityNameKey: cityName_inst.cityNameKey,
        cityName: cityName_inst.cityName
    }
    res.status(200).send(resObj);
});

module.exports = router;