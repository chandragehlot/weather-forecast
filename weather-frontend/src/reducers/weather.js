const initialWeather = {};

const cityWeatherReducer = (state = initialWeather, action) => {
    switch (action.type) {
        case 'GET_CITY_WEATHER_SUCC':
            return {...action.data}

        default:
            return state;
    }
}

export default cityWeatherReducer;