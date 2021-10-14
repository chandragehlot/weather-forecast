const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CitySchema  = new Schema({
    cityname : { type: String },
    cityname_label: { type: String },
    createdAt: Date
}, {
    timestamps : true
});

const City = mongoose.model("City", CitySchema);

module.exports = City;