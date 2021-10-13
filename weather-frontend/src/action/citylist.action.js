import axios from 'axios';

const citylist_url = 'http://localhost:3000/api/v1/citylist';
const addCity_url = 'http://localhost:3000/api/v1/city';

const fetchCityList = () => {
    return (dispatch) => {
        return axios.get(citylist_url)
        .then(res => dispatch(
                { type: 'FETCH_CITYLIST_SUCC', data: res.data }))
            .catch(err => dispatch(
                { type: 'FETCH_CITYLIST_FAIL', msg: "Unable to fetch data" }))
    }
}

const addNewCity = (cityObj) => {
    return (dispatch) => {
        return axios.post(addCity_url, { city_name : cityObj.city_name })
        .then(res => dispatch(
                { type: 'FETCH_NEWCITY_SUCC', data: res.data })
        )
        .then(()=> Promise.resolve())
        .catch(err => dispatch(
                { type: 'FETCH_NEWCITY_FAIL', msg: "Unable to fetch data" }))
    }
}

export {
    addNewCity,
    fetchCityList
};