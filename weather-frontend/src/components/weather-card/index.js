import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import config from '../../config';
import { getWeatherByCity } from "../../action/weather.action";

class WeatherCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherDetails : {
                main : {}, 
                weather : [],
                wind : {}, 
                visibility : 0, 
                clouds : 0
            },
            error: false,
            errMsg : ''
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props){
            if(prevProps.active_cityname !== this.props.active_cityname){
                this.props.getWeatherByCity(this.props.active_cityname);   
            } else {
                const { weatherDetails, apiError, apiErrMsg } = this.props;
                this.setState({
                    weatherDetails : {...weatherDetails},
                    error: apiError,
                    errMsg: apiErrMsg
                })                
            }
        }
    }

    getIconUrl(){
        const { weather } = this.state.weatherDetails || [];
        if(weather.length > 0){
            const icon = weather[0].icon;
            return `${config.WEATHER_ICON_URL}/${icon}@2x.png`;
        }
        return '';
    }

    render() {
        const { main, weather, wind, visibility, clouds } = this.state.weatherDetails;
        return (
            (this.state.error) ?
            <div> { this.state.errMsg }</div>
            :
            <div className="card__cont">
                { (this.props.citylistLength == 0) ?
                    <div className="vh-center"> { config.CITYLIST_EMPTY_ERR }  </div> :
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
                            <img src={this.getIconUrl()} alt="Weather"/>
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
                }

            </div>
        );
    }
}

function mapStateToProps(state) {
    const { weatherdata, error, errormsg } = state.cityWeather;
    const { active_cityname, citylist} = state.cityList;
    return {
        weatherDetails : weatherdata,
        apiError : error,
        apiErrMsg : errormsg,
        active_cityname,
        citylistLength : citylist.length
    };
}

function mapDispatchToProps(dispatch) {
    return {
      getWeatherByCity: (cityname) => dispatch(getWeatherByCity(cityname))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCard);