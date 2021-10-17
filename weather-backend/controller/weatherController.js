const axios = require("axios");
const {
    ServerErrorResponse,
    SuccessResponse,
  } = require("../utils/apiResponse");

const weather_url = process.env.WEATHER_OPENAPI_URL;
const sec_key = process.env.WEATHER_OPENAPI_SEC_KEY;
const unit = process.env.WEATHER_OPENAPI_UNIT ;

function getCityWeatherData(req,res) {
  const { cityname } = req.params;

  axios.get(weather_url, {
        params: {
          q: cityname,
          appid: sec_key,
          units: unit
        }
      })
      .then(response=>{
        SuccessResponse(res, { ...response.data });
      })
      .catch((error)=>{
        console.log("Error with weather open API", error);
        return ServerErrorResponse(res);
      })
}

module.exports = {
  getCityWeatherData
}