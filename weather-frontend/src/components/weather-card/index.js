import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import config from '../../config';

class WeatherCard extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps !== this.props){
            return true;
        }
        return false;
    }
    
    getIconUrl(weather){
        if(weather.length > 0){
            const icon = weather[0].icon;
            return `${config.WEATHER_ICON_URL}/${icon}@2x.png`;
        }
        return '';
    }

    render() {
        const { weatherdata, error, errormsg } = this.props;
        const { main, weather, wind, visibility, clouds } = weatherdata;
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
                            <img src={this.getIconUrl(weather)} alt="Weather"/>
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
                    <div className="card__listcont">
                        <div className="card__listitem">
                            <span>Wind Gusts</span>
                            <span>{ wind && wind.speed }</span>
                        </div>
                        <div className="card__listitem">
                            <span>Pressure</span>
                            <span>{ main && main.pressure } mb</span>
                        </div>
                        <div className="card__listitem">
                            <span>Humidity</span>
                            <span>{ main && main.humidity } %</span>
                        </div>
                        <div className="card__listitem">
                            <span>Visibility</span>
                            <span>{visibility && (Math.floor(parseInt(visibility)/1000))} km</span>
                        </div>
                        <div className="card__listitem">
                            <span>clouds</span>
                            <span>{ clouds && clouds.all } %</span>
                        </div>                        
                    </div>
                </div>
                </Fragment>
            </div>
        );
    }
}

function mapStateToProps({ cityWeather }) {
    const { weatherdata, error, errormsg } = cityWeather;
    return {
        weatherdata, error, errormsg
    };
}

export default connect(mapStateToProps)(WeatherCard);