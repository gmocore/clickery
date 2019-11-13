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

  updateScore = () => {
    this.setState({score: this.state.score + 1})
  };

  gameOver = () => this.setState({score: 0, clicked: []})

  cardClicked = e => {
    let id = e.target.id;
    console.log(id);
    this.setState({ clicked: [...this.state.clicked, id] });
    this.shuffle(this.state.characters);
    if (this.state.clicked.includes(id)) {
      console.log("this was already clicked");
      this.gameOver();
    } else {
      console.log("new card clicked");
      this.updateScore();
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
        <p onClick={this.updateScore}>{this.state.score}</p>

        <Nav />
        {this.state.characters.map(({ id, name, image }) => (
          <Photo
            src={image}
            alt={name}
            key={id}
            id={id}
            // onClick={()=> this.shuffle(this.state.characters)}
            onClick={this.cardClicked}
          />
        ))}
      </div>
    );
  }
}

export default App;
