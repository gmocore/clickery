import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import characters from "./characters.json";
import Photo from "./components/Photo/Photo";

class App extends Component {
  state = {
    characters
  };

   handleClick = (e) => {
    console.log(e)
  }

  render() {
    return (
      <div className="app">
        <Nav />
        {this.state.characters.map(({ id, name, image }) => (
          <Photo src={image}
          alt={name}
          key={id}
          id={id}
          onClick={this.handleClick} />
        ))}
      </div>
    );
  }
}

export default App;
