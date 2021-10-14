import React from 'react';
import CityListCard from '../../components/citylist-card';
import WeatherCard from '../../components/weather-card';

const WeatherHome = () => {
  return (
    <div className="weather-app">
      <div className="left-card">
        <WeatherCard />
      </div>
      <div className="right-card">
        <CityListCard />
      </div>
    </div>
  );
};

export default WeatherHome;