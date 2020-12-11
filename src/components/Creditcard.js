import React, { Component } from "react";
import "../components/Creditcard.css";
import logo from "./image01.png";

export default class Creditcard extends Component {
  constructor() {
    super();
    this.state = {
      inputCardNum: "",
      inputCardName: "",
      inputCardDate: "",
      inputCardCVV: "",
    };
  }
  handleCardNumChange = (e) => {
    let lastChar = e.target.value[e.target.value.length - 1];
    if (e.target.value === "") this.setState({ inputCardNum: "" });
    if (![undefined, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(+lastChar)) return;
    let cardNumbers = e.target.value.split("");
    cardNumbers = cardNumbers.filter((number) => {
      return number !== " ";
    });
    if (cardNumbers.length > 4) {
      cardNumbers.splice(4, 0, " ");
    }
    if (cardNumbers.length > 9) {
      cardNumbers.splice(9, 0, " ");
    }
    if (cardNumbers.length > 14) {
      cardNumbers.splice(14, 0, " ");
    }

    this.setState({
      inputCardNum: cardNumbers.join(""),
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  render() {
    return (
      <div id="cardComponent">
        <div className="wrapper">
          <div className="navigation">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
          </div>
          <h1 className="banner">Credit Card Effect</h1>
          <div className="cardRender">
            <img className="logo" src={logo} />
            <div>
              <h1>{this.state.inputCardNum}</h1>
            </div>
            <div className="renderedInputs">
              <div className="cardName">
                <h3>{this.state.inputCardName}</h3>
              </div>
              <div className="cardDate">
                <h3>{this.state.inputCardDate}</h3>
              </div>
              <div className="cardCVV">
                <h3>{this.state.inputCardCVV}</h3>
              </div>
            </div>
          </div>
          <div className="inputFieldsContainer">
            <div className="inputFields">
              <input
                id="inputCardNum"
                onChange={this.handleCardNumChange}
                value={this.state.inputCardNum}
                type="tel"
                pattern="\d*"
                maxLength="19"
                placeholder="xxxx-xxxx-xxxx-xxxx"
              />
              <div className="nameDateContainer">
                <input
                  id="inputCardName"
                  placeholder="Name"
                  onChange={this.handleChange}
                  value={this.state.inputCardName}
                />
                <input
                  id="inputCardDate"
                  placeholder="MM/YY"
                  onChange={this.handleChange}
                  value={this.state.inputCardDate}
                  type="text"
                  maxLength="5"
                />
              </div>
              <input
                id="inputCardCVV"
                placeholder="CVV"
                onChange={this.handleChange}
                name="CVV"
                value={this.state.inputCardCVV}
                type="text"
                maxLength="3"
                size="3"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
