import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCityList, addNewCity } from "../../action/citylist.action";
import { getWeatherByCity } from "../../action/weather.action";


class CityListCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityinput: "",
      activeCityIndex: 0 
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }


  componentDidMount() {
    this.props.fetchCityList().then(()=>{
      const defaultCity = (this.props.citylist.length)?this.props.citylist[0].cityNameKey : '';
      this.props.getWeatherByCity(defaultCity)
    })
  }

  handleInputChange(e) {
    const inputVal = e.target.value;
        this.setState({
            cityinput: inputVal,
        });
  }

  handleKeyPress(e) {
    if (e.key === "Enter" && e.target.value) {
      this.handleAddCity();
    }
    return false;
  }

  handleAddCity() {
    this.props.addCity({ city_name : this.state.cityinput }).then(()=>this.resetInputField())
  }
  
  resetInputField(){
      this.setState({
          cityinput : ''
      })
  }

  handleCitySelect(index, cityNameKey){
    this.setState({
      activeCityIndex : index
    },()=>{
      this.props.getWeatherByCity(cityNameKey)
    })

  }

  render() {
    return (
      <div className="city__cont">
        <div className="city__input_sec">
          <div className="city__add_item">
            <input
              className="input_comp"
              type="text"
              value={this.state.cityinput}
              onChange={(e) => this.handleInputChange(e)}
              onKeyPress={(e) => this.handleKeyPress(e)}
            />
            <button className="addbutton" onClick={() => this.handleAddCity()}>
              ADD
            </button>
          </div>
        </div>
        <div className="city__list_sec">
          {this.props.citylist &&
            this.props.citylist.map((cityObj, index) => {
              return (
                <div 
                key={index + 11} 
                className={`city__listitem ${this.state.activeCityIndex === index ? 'item_active' : ''}`}
                onClick={()=> this.handleCitySelect(index,cityObj.cityNameKey)}
                >
                  {cityObj.cityName}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    citylist: state.cityList.citylist,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCityList: () => dispatch(fetchCityList()),
    addCity: (cityObj) => dispatch(addNewCity(cityObj)),
    getWeatherByCity: (cityName) => dispatch(getWeatherByCity(cityName))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityListCard);
