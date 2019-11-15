import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import characters from "./characters.json";
import Photo from "./components/Photo/Photo";
import Message from "./components/Message";

class App extends Component {
  state = {
    characters,
    score: 0,
    clicked: [],
    highScore: 0,
    message:
      "Click an image to begin, don't click the same image twice or they get clipped!"
  };

  renderCards = () =>
    this.state.characters.map(({ id, name, image }) => (
      <Photo
        src={image}
        alt={name}
        key={id}
        id={id}
        onClick={this.cardClicked}
      />
    ));

  updateScore = () => {
    if (this.state.score > 13) {
      this.setState({
        message: "You Win! looks like you know all about them corner boys",
        score: 0,
        clicked: []
      });
    } else {
      this.setState({ score: this.state.score + 1, message: "Correct!" });
      setTimeout(() => {
        this.setState({ message: `Don't screw up!` });
      }, 750);
    }
  };

  gameOver = () => {
    this.setState({
      score: 0,
      clicked: [],
      message:
        "you already guessed that, you just dropped a body, click a card to try again"
    });
    document.querySelector(".message").classList.add("text-danger");
    document.querySelector(".images").classList.add("shake");
  };

  checkHighScore = () => {
    if (this.state.score >= this.state.highScore) {
      this.setState({ highScore: this.state.score + 1 });
    }
  };

  cardClicked = e => {
    document.querySelector(".message").classList.remove("text-danger");
    document.querySelector(".images").classList.remove("shake");

    let id = e.target.id;
    this.setState({ clicked: [...this.state.clicked, id] });
    this.shuffle(this.state.characters);
    if (this.state.clicked.includes(id)) {
      this.gameOver();
    } else {
      this.updateScore();
      this.checkHighScore();
    }
  };

  shuffle = array => {
    let currentIndex = array.length;

    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      let tempValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempValue;
    }
    this.setState({ characters: characters });
  };

  render() {
    return (
      <div className="app">
        <Nav score={this.state.score} highScore={this.state.highScore} />
        <Message message={this.state.message} />
        <div className="container images mb-3 p-2">{this.renderCards()}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
