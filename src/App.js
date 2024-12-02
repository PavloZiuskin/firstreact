import React, { Component } from "react";
import EmojiList from "./componets/EmojiList";
import Controls from "./componets/Controls";

class App extends Component {
  constructor(props) {
    super(props);
    const savedVotes = JSON.parse(localStorage.getItem("emojiVotes")) || {
      "😊": 0,
      "😂": 0,
      "😎": 0,
      "😢": 0,
    };
    this.state = { votes: savedVotes };
  }

  handleVote = (emoji) => {
    this.setState(
        (prevState) => ({
          votes: {
            ...prevState.votes,
            [emoji]: prevState.votes[emoji] + 1,
          },
        }),
        () => localStorage.setItem("emojiVotes", JSON.stringify(this.state.votes))
    );
  };

  showResults = () => {
    const { votes } = this.state;
    const maxVotes = Math.max(...Object.values(votes));
    const winner = Object.keys(votes).find((emoji) => votes[emoji] === maxVotes);
    alert(`Переможець: ${winner} з ${maxVotes} голосами!`);
  };

  clearResults = () => {
    const initialVotes = { "😊": 0, "😂": 0, "😎": 0, "😢": 0 };
    this.setState({ votes: initialVotes }, () => {
      localStorage.removeItem("emojiVotes");
    });
  };

  render() {
    return (
        <div>
          <h1>Голосуй за улюблений смайлик!</h1>
          <EmojiList votes={this.state.votes} onVote={this.handleVote} />
          <Controls onShowResults={this.showResults} onClearResults={this.clearResults} />
        </div>
    );
  }
}

export default App;
