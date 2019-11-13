import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import characters from "./characters.json";
import Photo from "./components/Photo/Photo";

class App extends Component {
  state = {
    characters,
    score: 0,
    clicked: [],
    highScore: 0
  };

  renderCards = () => this.state.characters.map(({ id, name, image }) => (
      <Photo
        src={image}
        alt={name}
        key={id}
        id={id}
        // onClick={()=> this.shuffle(this.state.characters)}
        onClick={this.cardClicked}
      />
    ))
  
  updateScore = () => {
    this.setState({score: this.state.score + 1})
  };

  gameOver = () => this.setState({score: 0, clicked: []});

  checkHighScore = () => {
    if (this.state.score >= this.state.highScore) {
      this.setState({highScore: this.state.score + 1})
    }
  }

  cardClicked = e => {
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

  // fisher-yates shuffle algorithm found on stack-overflow
  shuffle = array => {
    let currentIndex = array.length;

    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      let tempValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempValue;
    }
    // set characters to shuffled order
    this.setState({ characters: characters });
  };

  render() {
    return (
      <div className="app">
        <Nav score={this.state.score} highScore={this.state.highScore}/>
        <div className="container">
        {this.renderCards()}
        </div>
      </div>
    );
  }
}

export default App;
