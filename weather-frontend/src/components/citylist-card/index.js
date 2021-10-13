import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCityList, addNewCity } from "../../action/citylist.action";

class CityListCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityinput: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillMount() {}

  componentDidMount() {
    this.props.fetchCityList();
  }

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  handleInputChange(e) {
    const inputVal = e.target.value;
    if(inputVal){
        this.setState({
            cityinput: inputVal,
        });
    }
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
                <div key={index + 11} className="city__listitem">
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
    citylist: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCityList: () => dispatch(fetchCityList()),
    addCity: (cityObj) => dispatch(addNewCity(cityObj))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityListCard);
