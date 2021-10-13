const initialCityList = [];

const cityListReducer = (state = initialCityList, action) => {
    switch (action.type) {
        case 'FETCH_NEWCITY_SUCC':
            return [...state,action.data]
        case 'FETCH_CITYLIST_SUCC':
            return [...state, ...action.data]            
        default:
            return state;
    }
}

export default cityListReducer;