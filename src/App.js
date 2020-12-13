import React, { Component } from "react";
import "./styles.css";
import Card from "./Card";
import Counter from "../Counter";
import flashCardData from "./flashCardData.js";

const flashCards = flashCardData;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countRight: 0,
      countWrong: 0
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

/*<div className="flashcard-list">
          {flashCards.map((cards)) => {
            return (
              <Card
              frontSide={cards.frontSide}
              backSide={cards.backSide}
              handleClick={this.handleClick}
              handleNoClick={this.handleNoClick}
              )
          }}
        </div>
        
        <Card
          handleClick={this.handleClick}
          handleNoClick={this.handleNoClick}
          frontSide="What is a smoke test?"
          backSide="When applied to web applications, smoke tests verify that the most important functionality is working. By design, smoke tests do not cover every permutation and edge case. They instead check that your application isn't so broken that additional testing would be a waste of time."
        />
        <Card
          handleClick={this.handleClick}
          handleNoClick={this.handleNoClick}
          frontSide="What does the exact prop of the Route component do?"
          backSide="The exact prop specifies that the route has to exactly match in order for the component to display. If the Route component didn't have the exact prop, the component would display for exact matches and partial matches."
        />
        <Card
          handleClick={this.handleClick}
          handleNoClick={this.handleNoClick}
          frontSide="Explain the difference between props, state, and Context."
          backSide="State - This is data maintained inside a component. It is local or owned by that specific component. The component itself will update the state using the setState function.
Props - Data passed in from a parent component. props are read-only in the child component that receives them. However, callback functions can also be passed, which can be executed inside the child to initiate an update.
The difference is all about which component owns the data. State is owned locally and updated by the component itself. Props are owned by a parent component and are read-only. Props can only be updated if a callback function is passed to the child to trigger an upstream change.
The state of a parent component can be passed a prop to the child. They are referencing the same value, but only the parent component can update it.
Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. 
 
"
        />*/
