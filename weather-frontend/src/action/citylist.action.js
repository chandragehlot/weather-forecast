import axios from 'axios';
import config from '../config';

const get_citylist_url = `${config.CITY_API_URL}/city`;
const add_newcity_url = `${config.CITY_API_URL}/city`;

const fetchCityList = () => {
    return (dispatch) => {
        return axios.get(get_citylist_url)
        .then(res => dispatch(
                { type: 'FETCH_CITYLIST_SUCC', data: res.data.resData }))
            .catch(err => console.log('error in fetch city list', err))
    }
}

const addNewCity = (cityObj) => {
    return (dispatch) => {
        return axios.post(add_newcity_url, { cityname : cityObj.cityname })
        .then(res => dispatch(
                { type: 'ADD_NEWCITY_SUCC', data: res.data.resData })
        )
        .then(()=> Promise.resolve())
        .catch(err => console.log('error in add new city', err))
    }
}

export {
    addNewCity,
    fetchCityList
};