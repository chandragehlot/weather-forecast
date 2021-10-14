import axios from 'axios';
import config from '../config';

const get_citylist_url = `${config.CITY_API_URL}/city`;
const add_newcity_url = `${config.CITY_API_URL}/city`;

const fetchCityList = () => {
    return (dispatch) => {
        return axios.get(get_citylist_url)
        .then(res => dispatch(
                { type: 'FETCH_CITYLIST_SUCC', data: res.data.resData }))
            .then((res)=>{ 
                if(res.data.length > 0){
                    const defaultCity = res.data[0].cityname;
                    dispatch(setActiveCityName(defaultCity));                    
                }

            })
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

const setActiveCityName = (active_cityname) => {
    return { type: 'SET_ACTIVE_CITY', data: { active_cityname : active_cityname } }
}

export {
    addNewCity,
    fetchCityList,
    setActiveCityName
};