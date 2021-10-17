import cityListReducer from './cityList';
import cityWeatherReducer from './weather';

import { combineReducers } from "redux";


export const rootReducer = combineReducers({
    cityDetails : cityListReducer,
    cityWeather : cityWeatherReducer
});
