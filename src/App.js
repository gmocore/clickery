import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import characters from "./characters.json";
import Photo from "./components/Photo/Photo";
import Message from "./components/Message";

class App extends Component {
  // initialize state
  state = {
    characters,
    score: 0,
    clicked: [],
    highScore: 0,
    message:
      "Click an image to begin, don't click the same image twice or they get clipped!"
  };

  // render photo component for each character
  renderCards = () =>
  // loop though characters and render photo for each
    this.state.characters.map(({ id, name, image }) => (
      <Photo
      // set props
        src={image}
        alt={name}
        key={id}
        id={id}
        onClick={this.cardClicked}
      />
    ));

  // method to update score from state
  updateScore = () => {
    // check if user has won
    if (this.state.score > 13) {
      this.setState({
        message: "You Win! looks like you know all about them corner boys",
        score: 0,
        clicked: []
      });
    } else {
      // update score from state
      this.setState({ score: this.state.score + 1, message: "Correct!" });
      setTimeout(() => {
        // display message to user after correct guess
        this.setState({ message: `Don't screw up!` });
      }, 750);
    }
  };
  // method to handle game over
  gameOver = () => {
    // reset state to default values
    this.setState({
      score: 0,
      clicked: [],
      message:
        "you already guessed that, you just dropped a body, click a card to try again"
    });
    // add css classes for game over
    document.querySelector(".message").classList.add("text-danger");
    document.querySelector(".images").classList.add("shake");
  };

  // check and update high score
  checkHighScore = () => {
    // set high score if better than previous
    if (this.state.score >= this.state.highScore) {
      this.setState({ highScore: this.state.score + 1 });
    }
  };

  // handling for clicked cards. pulls in the other methods to check score and update state
  cardClicked = e => {
    // remove any game over css classes
    document.querySelector(".message").classList.remove("text-danger");
    document.querySelector(".images").classList.remove("shake");
    // get id from dom
    let id = e.target.id;
    // add clicked card id to clicked array
    this.setState({ clicked: [...this.state.clicked, id] });
    // shuffle cards
    this.shuffle(this.state.characters);
    // check if card was previously clicked
    if (this.state.clicked.includes(id)) {
      // trigger game over
      this.gameOver();
    } else {
      // update and check high score
      this.updateScore();
      this.checkHighScore();
    }
  };

  // fisher yates shuffle algorithm. I didn't create this.
  shuffle = array => {
    let currentIndex = array.length;

    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      let tempValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempValue;
    }
    // set characters to shuffled character array
    this.setState({ characters: characters });
  };


  render() {
    return (
      <div className="app">
        {/* track current score and high score */}
        <Nav score={this.state.score} highScore={this.state.highScore} />
        {/* display current message to user */}
        <Message message={this.state.message} />
        <div className="container images mb-3 p-2">{this.renderCards()}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
