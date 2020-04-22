import React from 'react';
import './App.css';
import 'react-awesome-button/dist/styles.css';
import TopLeft from './TopLeft';
import TopRight from './TopRight';
import BottomLeft from './BottomLeft';
import BottomRight from './BottomRight';

function App() {
    return (
        <div className="App">
            <TopLeft />
            <TopRight />
            <BottomLeft />
            <BottomRight />
        </div>
    );
}

export default App;
