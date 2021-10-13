import React, { Component } from 'react';
import PropTypes from 'prop-types';
import weatherIcon from '../../assets/weather.svg';


class WeatherCard extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
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
                            <img src={weatherIcon} />
                        </div>
                        <div className="card__tempcont"> 
                            <div className="card__temp">
                                <span>42&deg;</span>
                                <sub className="unit">C</sub>
                            </div>
                            <div className="card__feel"> Real Feel 44</div>
                        </div>
                    </div>
                    <div className="card__row3">
                        Mostly Sunny
                    </div>
                </div>

                <div className="card__rightsec">
                    <div className="card__listcont">
                        <div className="card_listitem">
                            <span>Air Quality</span>
                            <span>Unhealty</span>
                        </div>
                        <div className="card_listitem">
                            <span>Air Quality</span>
                            <span>Unhealty</span>
                        </div>
                        <div className="card_listitem">
                            <span>Air Quality</span>
                            <span>Unhealty</span>
                        </div>
                        <div className="card_listitem">
                            <span>Air Quality</span>
                            <span>Unhealty</span>
                        </div>
                        <div className="card_listitem">
                            <span>Air Quality</span>
                            <span>Unhealty</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

WeatherCard.propTypes = {

};

export default WeatherCard;