import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CityListCard from '../../components/citylist-card';
import WeatherCard from '../../components/weather-card';


class WeatherHome extends Component {
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
          <div className="weather-app">
              <div className="left-card">
                <WeatherCard />
              </div>
              <div className="right-card">
                <CityListCard />
              </div>
          </div>
        );
    }
}

WeatherHome.propTypes = {

};

export default WeatherHome;