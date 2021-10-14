const express = require('express');
const City = require('../models/city');

const router = express.Router();


router.get("/citylist", async(req,res) => {
    const cityList = await City.find({}, 
        { _id: 0,
          __v : 0,
          createdAt: 0,
          updatedAt: 0
        }
    );
    res.status(200).json(cityList);
})

router.post('/city', async(req,res)=>{
    const { city_name } = req.body;

    const cityObj = {
        cityNameKey : city_name,
        cityName: city_name.toUpperCase(),
        createdAt: Date.now()
     }
    const cityName_inst = await City.create(cityObj)
    const resObj = {
        cityNameKey: cityName_inst.cityNameKey,
        cityName: cityName_inst.cityName
    }
    res.status(200).send(resObj);
});

module.exports = router;