import React from "react";

const Controls = ({ onShowResults, onClearResults }) => {
    return (
        <div style={{ marginTop: "20px" }}>
            <button onClick={onShowResults} style={{ marginRight: "10px" }}>
                Show Results
            </button>
            <button onClick={onClearResults}>Очистити результати</button>
        </div>
    );
};

export default Controls;