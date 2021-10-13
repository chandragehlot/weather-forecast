import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CityListCard extends Component {
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
            <div className="city__cont">
                <div className="city__additem">
                    <input 
                        className='city__input' 
                        type="text" 
                        value={'hello'} 
                    />
                    <span className="city__addbutton">
                        ADD
                    </span>
                </div>
                <div className="city__list">
                    <div className="city__listitem">
                        JAIPUR
                    </div>
                    <div className="city__listitem item_active">
                        NEW DELHI
                    </div>
                    <div className="city__listitem">
                        UDAIPUR
                    </div>
                    <div className="city__listitem">
                        AGRA
                    </div>
                    <div className="city__listitem">
                        AGRA
                    </div>
                    <div className="city__listitem">
                        UDAIPUR
                    </div>
                    <div className="city__listitem">
                        AGRA
                    </div>
                    <div className="city__listitem">
                        AGRA
                    </div>                    
                </div>
            </div>
        );
    }
}

CityListCard.propTypes = {

};

export default CityListCard;