import React, { Component } from 'react';
import { connect } from 'react-redux';


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
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props){
            this.setState({
                weatherDetails : {...this.props.weatherByCity}
            })
        }
    }

    getIconUrl(){
        const { weather } = this.state.weatherDetails;
        if(weather.length){
            const icon = weather[0].icon;
            return `https://openweathermap.org/img/wn/${icon}@2x.png`;
        }
        return '';
    }

    render() {
        const { main, weather, wind, visibility, clouds } = this.state.weatherDetails;
        return (
            <div className="card_cont">
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
                            <img src={this.getIconUrl()} />
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
                        <div className="card_listitem">
                            <span>Wind Gusts</span>
                            <span>{ wind && wind.speed }</span>
                        </div>
                        <div className="card_listitem">
                            <span>Pressure</span>
                            <span>{ main && main.pressure } mb</span>
                        </div>
                        <div className="card_listitem">
                            <span>Humidity</span>
                            <span>{ main && main.humidity } %</span>
                        </div>
                        <div className="card_listitem">
                            <span>Visibility</span>
                            <span>{visibility && (Math.floor(parseInt(visibility)/1000))} km</span>
                        </div>
                        <div className="card_listitem">
                            <span>clouds</span>
                            <span>{ clouds && clouds.all } %</span>
                        </div>                        
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        weatherByCity : state.cityWeatherData
    };
}

export default connect(mapStateToProps)(WeatherCard);