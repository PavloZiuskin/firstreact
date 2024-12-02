import React, { Component } from "react";

class Controls extends Component {
    render() {
        const { onShowResults, onClearResults } = this.props;
        return (
            <div style={{ marginTop: "20px" }}>
                <button onClick={onShowResults} style={{ marginRight: "10px" }}>
                    Show Results
                </button>
                <button onClick={onClearResults}>Очистити результати</button>
            </div>
        );
    }
}

export default Controls;