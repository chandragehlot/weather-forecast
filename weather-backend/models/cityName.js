const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CityNameSchema  = new Schema({
    cityNameKey : { type: String },
    cityName: { type: String },
    createdAt: Date
}, {
    timestamps : true
});

const CityName = mongoose.model("CityName", CityNameSchema);

module.exports = CityName;