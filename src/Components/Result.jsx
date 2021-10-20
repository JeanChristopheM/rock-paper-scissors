import React, { Component } from 'react';
import Symbol from './Symbol';

class Result extends Component {
    render() { 
        return (
        <main className="result">
            <div className="result__pick">
                <Symbol circle={"one"} />
            </div>
            <div className="result__pickPC">
                <Symbol circle={"two"} />
            </div>
        </main>
        );
    }
}
 
export default Result;