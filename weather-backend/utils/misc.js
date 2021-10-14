const createCityObj = (city_name) => {
    return {
        cityNameKey : city_name.toLowerCase(),
        cityName: city_name.toUpperCase(),
        createdAt: Date.now()
     }
}

const cityProjectoin = { _id: 0, __v : 0, createdAt: 0, updatedAt: 0 };

module.exports = {
    createCityObj,
    cityProjectoin
}