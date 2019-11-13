import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import characters from "./characters.json";
import Photo from "./components/Photo/Photo";

class App extends Component {
  state = {
    characters,
    score: 0
  };

  updateScore = () => this.setState({
    score: this.state.score + 1
  })

  shuffleImages = () => this.setState({
    characters: this.state.characters.reverse(),
    score: this.state.score + 1
  })
 
  render() {
    return (
      <div className="app" >
        <p onClick={this.updateScore}>{this.state.score}</p>

        <Nav />
        {this.state.characters.map(({ id, name, image }) => (
          <Photo src={image}
          alt={name}
          key={id}
          id={id}
          onClick={this.shuffleImages}
          />
        ))}
      </div>
    );
  }
}

export default App;
