const express = require('express');
const cityController = require('../controller/CityController');
const weatherController = require('../controller/weatherController');

const validateCity = require('../middlewares/CityValidation');


const router = express.Router();


router.get("/city", cityController.handleGetCityList);
router.post('/city',
    validateCity,
    cityController.handleAddNewCity
);

router.get("/weather/:cityname", weatherController.getCityWeatherData)

module.exports = router;