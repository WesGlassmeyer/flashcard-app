import React, { Component } from "react";
import "./styles.css";
import Card from "./Card";
import Counter from "./Counter";
import flashCardData from "./flashCardData.js";

const flashCards = flashCardData;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countRight: 0,
      countWrong: 0,
    };
  }

  handleClick = () => {
    let countYes = this.state.countRight;
    this.setState({ countRight: countYes + 1 });
  };
  handleNoClick = () => {
    let countNo = this.state.countWrong;
    this.setState({ countWrong: countNo + 1 });
  };

  render() {
    return (
      <div className="App">
        <h1>Flashcard App</h1>
        <h2>Click on a card to see the solution!</h2>

        <div className="flashcard-list">
          {flashCards.map((cards, index) => {
            return (
              <Card
                key={index}
                frontSide={cards.frontSide}
                backSide={cards.backSide}
                handleClick={this.handleClick}
                handleNoClick={this.handleNoClick}
              />
            );
          })}
        </div>

        <Counter count={this.state} />
      </div>
    );
  }
}
