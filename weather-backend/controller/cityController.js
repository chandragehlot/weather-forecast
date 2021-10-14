const { City } = require('../models');
const { SUCCESS_CODE, ErrorResponse, BadReqResponse } = require('../utils/apiResponse');
const { validationResult } = require('express-validator');


const createCityObj = (city_name) => {
    return {
        cityNameKey : city_name,
        cityName: city_name.toUpperCase(),
        createdAt: Date.now()
     }
}

async function handleGetCityList(req, res){
    try {
        const citylist = await City.find({}, 
            { _id: 0,
              __v : 0,
              createdAt: 0,
              updatedAt: 0
            }
        );
        res.status(SUCCESS_CODE).json(citylist);
        
    } catch (error) {
        console.log('get city list error',error)
        return ErrorResponse(res)
    }
}

function handleAddNewCity(req,res){
    try{
        const error = validationResult(req);
        if(!error.isEmpty()){
            BadReqResponse(res, error);
        } else {
            const { city_name } = req.body;
            const cityObj = createCityObj(city_name);
            City.findOne({ cityNameKey : city_name }, async function(err, docs){
                console.log('docs', docs);
                if(docs){
                    res.status(400).json({ message : 'city already exist' })
                }else{
                    const cityName_inst = await City.create(cityObj)
                    const resObj = {
                        cityNameKey: cityName_inst.cityNameKey,
                        cityName: cityName_inst.cityName
                    }
                    res.status(SUCCESS_CODE).send(resObj);
                }
            })
        }
    } catch (err) {
        console.log('add city list error', err);
        return ErrorResponse(res)
    }
}

module.exports = {
    handleAddNewCity,
    handleGetCityList
}