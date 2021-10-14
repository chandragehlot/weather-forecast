const express = require('express');
const cityController = require('../controller/CityController');
const validateCity = require('../middlewares/city.validation');


const router = express.Router();


router.get("/city", cityController.handleGetCityList);
router.post('/city',
    validateCity,
    cityController.handleAddNewCity
);

module.exports = router;