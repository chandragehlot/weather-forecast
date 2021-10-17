import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCityList, addNewCity, setActiveCityFetchWeather } from "../../action/citylist.action";


class CityListCard extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      cityname: "",
      activeCityIndex: 0 
    };
  }


  componentDidMount() {
    this.props.fetchCityList()
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
    const cityname = this.state.cityname;
    this.props.addCity({ cityname : cityname }).then(()=>{
      if(this.props.citylist.length === 1){
        this.props.setActiveCityFetchWeather(cityname)
      }
      this.resetInputField();
    })
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
      this.props.setActiveCityFetchWeather(cityname)
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
        <ul className="city__list_sec">
          {this.props.citylist &&
            this.props.citylist.map((cityObj, index) => {
              return (
                <li
                  key={index + 11} 
                  className={`city__listitem ${this.state.activeCityIndex === index ? 'item_active' : ''}`}
                  onClick={()=> this.handleCitySelect(index,cityObj.cityname)}
                >
                  {cityObj.cityname_label}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ cityDetails }) {
  return {
    citylist: cityDetails.citylist,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCityList: () => dispatch(fetchCityList()),
    addCity: (cityObj) => dispatch(addNewCity(cityObj)),
    setActiveCityFetchWeather : (cityname) => dispatch(setActiveCityFetchWeather(cityname)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityListCard);
