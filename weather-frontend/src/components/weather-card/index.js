import React, { Fragment } from 'react';
import config from '../../config';
import { useSelector } from "react-redux";

const getIconUrl = (weather) => {
    if(weather.length > 0){
        const icon = weather[0].icon;
        return `${config.WEATHER_ICON_URL}/${icon}@2x.png`;
    }
    return '';
}

const WeatherCard = () => {
    const cityWeather = useSelector(state => state.cityWeather);

    const { weatherdata : { main, weather, wind, visibility, clouds }, error, errormsg } = cityWeather;

    return (
        (error) ?
        <div> { errormsg }</div>
        :        
        <div className="card__cont">
        <Fragment>
        <div className="card__leftsec"> 
            <div className="card__row1">
                <div className="card__main">
                    CURRENT WEATHER
                </div>
                <div className="card__sub">
                    {`${new Date().getHours()} : ${new Date().getMinutes()}`}
                </div>
            </div>
            <div className="card__row2">
                <div className="card__imgcont">
                    <img src={getIconUrl(weather)} alt="Weather"/>
                </div>
                <div className="card__tempcont"> 
                    <div className="card__temp">
                        <span>{main && main.temp}&deg;</span>
                        <sub className="unit">C</sub>
                    </div>
                    <div className="card__feel"> Real Feel {main && main.feels_like} &deg;</div>
                </div>
            </div>
            <div className="card__row3">
                {(weather.length > 0 && weather[0]) ? weather[0].description : ''}
            </div>
        </div>

        <div className="card__rightsec">
            <ul className="card__listcont">
                <li className="card__listitem">
                    <span>Wind Gusts</span>
                    <span>{ wind && wind.speed }</span>
                </li>
                <li className="card__listitem">
                    <span>Pressure</span>
                    <span>{ main && main.pressure } mb</span>
                </li>
                <li className="card__listitem">
                    <span>Humidity</span>
                    <span>{ main && main.humidity } %</span>
                </li>
                <li className="card__listitem">
                    <span>Visibility</span>
                    <span>{visibility && (Math.floor(parseInt(visibility)/1000))} km</span>
                </li>
                <li className="card__listitem">
                    <span>clouds</span>
                    <span>{ clouds && clouds.all } %</span>
                </li>                        
            </ul>
        </div>
        </Fragment>
    </div>
    );
}

export default WeatherCard;