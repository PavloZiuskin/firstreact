import React from "react";

const EmojiList = ({ votes, onVote }) => {
    return (
        <div>
            {Object.keys(votes).map((emoji) => (
                <button
                    key={emoji}
                    onClick={() => onVote(emoji)}
                    style={{ fontSize: "2rem", margin: "10px" }}
                >
                    {emoji} ({votes[emoji]})
                </button>
            ))}
        </div>
    );
};

export default EmojiList;