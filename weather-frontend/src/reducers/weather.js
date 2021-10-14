const initialWeather = {
    weatherdata: {
        main : {}, 
        weather : [],
        wind : {}, 
        visibility : 0, 
        clouds : 0
    },
    dataloading: false,
    error: false,
    errormsg: ''
};

const cityWeatherReducer = (state = initialWeather, action) => {
    switch (action.type) {
        case 'GET_CITY_WEATHER_STARTED':
            return {...state, dataloading : true, error : false, errormsg : '' }
        case 'GET_CITY_WEATHER_SUCC':
            return { ...state,  weatherdata : { ...action.data}, dataloading: false}
        case 'GET_CITY_WEATHER_FAIL':
            return { ...state, dataloading : false, error : true, errormsg : action.msg }
        default:
            return state;
    }
}

export default cityWeatherReducer;