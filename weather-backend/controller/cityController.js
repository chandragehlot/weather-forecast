const { City } = require("../models");
const {
  ServerErrorResponse,
  ValidationErrorResponse,
  SuccessResponse,
} = require("../utils/apiResponse");
const { validationResult } = require("express-validator");
const { createCityObj, cityProjectoin } = require("../utils/misc.js");

async function handleGetCityList(req, res) {
  try {
    const citylist = await City.find({}, cityProjectoin);
    SuccessResponse(res, citylist);
  } catch (error) {
    console.log("get city list error", error);
    ServerErrorResponse(res);
  }
}

async function handleAddNewCity(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      ValidationErrorResponse(res, "", errors);
    } else {
      const { city_name } = req.body;
      const cityObj = createCityObj(city_name);

      const city_Inst = await City.findOne({ cityNameKey: city_name });
      console.log("cityDoc_Instance", city_Inst);
      if (city_Inst != null) {
        ValidationErrorResponse(res, "City name already exists");
      } else {
        const { cityNameKey, cityName } = await City.create(cityObj);
        SuccessResponse(res, { cityNameKey, cityName });
      }
    }
  } catch (error) {
    console.log("add city list error", error);
    return ServerErrorResponse(res);
  }
}

module.exports = {
  handleAddNewCity,
  handleGetCityList,
};
