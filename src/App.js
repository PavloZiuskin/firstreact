import React, { useState, useEffect } from "react";
import EmojiList from "./componets/EmojiList";
import Controls from "./componets/Controls";

const App = () => {
  const initialVotes = { "😊": 0, "😂": 0, "😎": 0, "😢": 0 };
  const [votes, setVotes] = useState(() => {
    const savedVotes = JSON.parse(localStorage.getItem("emojiVotes"));
    return savedVotes || initialVotes;
  });

  useEffect(() => {
    localStorage.setItem("emojiVotes", JSON.stringify(votes));
  }, [votes]);

  const handleVote = (emoji) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [emoji]: prevVotes[emoji] + 1,
    }));
  };

  const showResults = () => {
    const maxVotes = Math.max(...Object.values(votes));
    const winner = Object.keys(votes).find((emoji) => votes[emoji] === maxVotes);
    alert(`Переможець: ${winner} з ${maxVotes} голосами!`);
  };

  const clearResults = () => {
    setVotes(initialVotes);
    localStorage.removeItem("emojiVotes");
  };

  return (
      <div>
        <h1>Голосуй за улюблений смайлик!</h1>
        <EmojiList votes={votes} onVote={handleVote} />
        <Controls onShowResults={showResults} onClearResults={clearResults} />
      </div>
  );
};

export default App;