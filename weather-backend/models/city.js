const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CitySchema  = new Schema({
    cityNameKey : { type: String },
    cityName: { type: String },
    createdAt: Date
}, {
    timestamps : true
});

const City = mongoose.model("City", CitySchema);

module.exports = City;