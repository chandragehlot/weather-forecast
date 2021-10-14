import axios from 'axios';

const weather_url = 'https://api.openweathermap.org/data/2.5/weather';
const appid = '858f15fed9292cbe25c341a754c55e45';

const getWeatherByCity = (cityName) => {
    return (dispatch) => {
        return axios.get(weather_url,{
            params : {
                q : cityName,
                appid : appid,
                units: 'metric'
            }
        })
        .then(res => dispatch(
                { type: 'GET_CITY_WEATHER_SUCC', data: res.data }))
            .catch(err => dispatch(
                { type: 'GET_CITY_WEATHER_FAIL', msg: "Unable to fetch data" }))
    }
}

export {
    getWeatherByCity
};