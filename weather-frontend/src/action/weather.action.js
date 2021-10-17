// import axios from "axios";
// import config from "../config";

// const weather_url = config.WEATHER_API_URL;
// const appid = config.WEATHER_API_KEY;
// const error_message = config.WEATHER_API_ERRRMSG;

// const getWeatherByCity = (cityname) => {
//   return (dispatch) => {
//     dispatch({ type: "GET_CITY_WEATHER_STARTED" });
//     return axios
//       .get(weather_url, {
//         params: {
//           q: cityname,
//           appid: appid,
//           units: "metric",
//         },
//       })
//       .then((res) =>
//         dispatch({ type: "GET_CITY_WEATHER_SUCC", data: res.data })
//       )
//       .catch((err) =>
//         dispatch({ type: "GET_CITY_WEATHER_FAIL", msg: error_message })
//       );
//   };
// };

// export { getWeatherByCity };
