const { body } = require('express-validator');

const validateCity = [
    body('city_name')
    .isAlpha('en-US')
    .isLength({ min: 3})
]

module.exports = validateCity;