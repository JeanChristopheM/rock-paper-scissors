import React, { Component } from 'react';
import Symbol from './Symbol';

class Main extends Component {
    render() { 
        return (
        <main className="main">
            <div className="main__triangle">
                <Symbol circle={"one"} buttonHandler={this.props.buttonHandler} />
                <Symbol circle={"two"} buttonHandler={this.props.buttonHandler} />
                <Symbol circle={"three"} buttonHandler={this.props.buttonHandler} />
            </div>
        </main>
        );
    }
}

export default Main;