import React, { Component } from "react";

class EmojiList extends Component {
    render() {
        const { votes, onVote } = this.props;
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
    }
}

export default EmojiList;