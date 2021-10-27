import React, { Component } from 'react';
import Symbol from './Symbol';

class Result extends Component {
    render() {
        const { pcPick, userPicked, resultHandler } = this.props;
        let win = false;
        switch (userPicked) {
            case 'one': 
                if (pcPick === 'three') win = true;
                else win = false;
                break;
            case 'two':
                if (pcPick === 'one') win = true;
                else win = false;
                break;
            case 'three':
                if (pcPick === 'two') win = true;
                else win = false;
                break;
            default: 
                throw new Error();
        }
        resultHandler(win);
        return (
        <main className="result">
            <div className="result__pick">
                <Symbol circle={userPicked} />
            </div>
            <div className="result__pickPC">
                <Symbol circle={pcPick} />
            </div>
        </main>
        );
    }
}
 
export default Result;