import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCityList, addNewCity } from "../../action/citylist.action";
import { getWeatherByCity } from "../../action/weather.action";


class CityListCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityname: "",
      activeCityIndex: 0 
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }


  componentDidMount() {
    this.props.fetchCityList().then(()=>{
      console.log('after fetch city list api call', this.props)
      if(this.props.citylist.length > 0){
        const defaultCity = this.props.citylist[0].cityname;
        this.props.getWeatherByCity(defaultCity)
      }
      // TODO
      // show error message on screen that city list empty
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('citylist card prevProps', prevProps);
    console.log('citylist card prevState', prevState);
    console.log('citylist card this props', this.props)
  }

  handleInputChange(e) {
    const inputVal = e.target.value;
        this.setState({
            cityname: inputVal,
        });
  }

  handleKeyPress(e) {
    if (e.key === "Enter" && e.target.value) {
      this.handleAddCity();
    }
    return false;
  }

  handleAddCity() {
    this.props.addCity({ cityname : this.state.cityname }).then(()=>this.resetInputField())
  }
  
  resetInputField(){
      this.setState({
          cityname : ''
      })
  }

  handleCitySelect(index, cityname){
    this.setState({
      activeCityIndex : index
    },()=>{
      this.props.getWeatherByCity(cityname)
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
              value={this.state.cityname}
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
                onClick={()=> this.handleCitySelect(index,cityObj.cityname)}
                >
                  {cityObj.cityname_label}
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
    getWeatherByCity: (cityname) => dispatch(getWeatherByCity(cityname))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityListCard);
