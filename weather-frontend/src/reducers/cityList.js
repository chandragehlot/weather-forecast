const initialCityList = {
citylist : []
}

const cityListReducer = (state = initialCityList, action) => {
    switch (action.type) {
        case 'ADD_NEWCITY_SUCC':
            return {
                citylist : [...state.citylist, action.data],
            }          
        case 'FETCH_CITYLIST_SUCC':
            return {
                citylist : [...action.data]
            }                      
        default:
            return state;
    }
}

export default cityListReducer;