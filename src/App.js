import React from 'react';
import './App.css';
import 'react-awesome-button/dist/styles.css';
import Heading from './Heading';
import Happiness from './Happiness';
import Invest from './Invest';
import Ways from './Ways';

function App() {
    return (
        <div className="App">
            <Heading />
            <Happiness />
            <Invest />
            <Ways />
        </div>
    );
}

export default App;
