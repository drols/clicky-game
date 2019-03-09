import React, { Component } from "react";
//import FriendCard from "./components/FriendCard";
import CharacterCard from "./components/CharacterCard"
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
//import friends from "./friends.json";
import characters from "./characters.json";



//

class App2 extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters
  };

  randomizeImages = id => {
    this.state.characters.sort(() => Math.random() - 0.5)
  }

  // Map over this.state.characters and render a CharacterCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Character List</Title>
        {this.state.characters.map(character => (
          <CharacterCard
            randomizeImages={this.randomizeImages}
            id={character.id}
            key={character.id}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App2;
