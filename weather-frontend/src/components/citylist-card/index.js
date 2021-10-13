import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CityListCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityinput: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;   
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    handleInputChange(e){
        const inputVal = e.target.value;

        console.log(inputVal);
        this.setState({
            cityinput : inputVal
        });
    }

    handleKeyPress(e){
        if(e.key === 'Enter'){
            this.handleAddCity();
        }
        return false;
        
    }

    handleAddCity(){
        console.log('add city submitted');
    }

    render() {
        return (
            <div className="city__cont">
                <div className="city__input_sec">
                    <div className="city__add_item">
                        <input 
                            className='input_comp' 
                            type="text" 
                            value={this.state.cityinput}
                            onChange={(e) => this.handleInputChange(e)}
                            onKeyPress={(e) => this.handleKeyPress(e)}
                        />
                        <button
                            className="addbutton"
                            onClick={() => this.handleAddCity}
                        >
                            ADD
                        </button>
                    </div>

                </div>
                <div className="city__list_sec">
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