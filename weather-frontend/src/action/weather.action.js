import axios from 'axios';

const weather_url = 'http://localhost:3000/api/v1/citylist';

const fetchCurrentWeather = () => {
    return (dispatch) => {
        return axios.get(weather_url)
        .then(res => dispatch(
                { type: 'GET_CITY_WEATHER_SUCC', data: res.data }))
            .catch(err => dispatch(
                { type: 'GET_CITY_WEATHER_FAIL', msg: "Unable to fetch data" }))
    }
}

export {
    fetchCurrentWeather
};