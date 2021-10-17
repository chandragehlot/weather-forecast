import axios from "axios";
import config from "../config";

const get_citylist_url = `${config.BASE_API_URL}/city`;
const add_newcity_url = `${config.BASE_API_URL}/city`;

const weather_url = `${config.BASE_API_URL}/weather`;
const error_message = config.WEATHER_API_ERRRMSG;

const fetchCityList = () => {
  return (dispatch) => {
    return axios
      .get(get_citylist_url)
      .then((res) =>
        dispatch({ type: "FETCH_CITYLIST_SUCC", data: res.data.resData })
      )
      .then((res) => {
        if (res.data.length > 0) {
          const defaultCity = res.data[0].cityname;
          dispatch(setActiveCityFetchWeather(defaultCity));
        }
      })
      .catch((err) => console.log("error in fetch city list", err));
  };
};

const addNewCity = (cityObj) => {
  return (dispatch) => {
    return axios
      .post(add_newcity_url, { cityname: cityObj.cityname })
      .then((res) =>{
        dispatch({ type: "ADD_NEWCITY_SUCC", data: res.data.resData })
        const response = res.data.resData;
        if(response.length === 1){
          return setActiveCityFetchWeather(response[0].cityname)
        }
      }
      )
      .catch((err) => console.log("error in add new city", err));
  };
};


const setActiveCityFetchWeather = (cityname) => {
  return (dispatch) => {
    dispatch({ type: 'SET_ACTIVE_CITY', data : { active_cityname: cityname } })
    dispatch({ type: "GET_CITY_WEATHER_STARTED" });
    return axios
      .get(`${weather_url}/${cityname}`)
      .then(res=> res.data.resData)
      .then((res) =>{
        dispatch({ type: "GET_CITY_WEATHER_SUCC", data: res })
      })
      .catch((err) =>
        dispatch({ type: "GET_CITY_WEATHER_FAIL", msg: error_message })
      );
  };
};

export { addNewCity, fetchCityList, setActiveCityFetchWeather };