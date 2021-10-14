const initialCityList = {
    citylist : [],
    active_cityname : ''
}

const cityListReducer = (state = initialCityList, action) => {
    switch (action.type) {
        case 'ADD_NEWCITY_SUCC':
            return {
                ...state,
                citylist : [...state.citylist, action.data],
            }          
        case 'FETCH_CITYLIST_SUCC':
            return {
                ...state,
                citylist : [...action.data]
            }
        case 'SET_ACTIVE_CITY' : 
            return {
                ...state,
                active_cityname : action.data.active_cityname
            }            
        default:
            return state;
    }
}

export default cityListReducer;