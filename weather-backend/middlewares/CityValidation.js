const { body } = require('express-validator');

const validateCity = [
    body('cityname')
    .isAlpha('en-US')
    .isLength({ min: 3 })
]

module.exports = validateCity;