const express = require('express');
const cityController = require('../controller/cityController');
const { body} = require('express-validator');

const router = express.Router();


router.get("/citylist", cityController.handleGetCityList);
router.post(
    '/city',
    body('city_name').isAlpha('en-US').isLength({ min: 3 }),
    cityController.handleAddNewCity);

module.exports = router;