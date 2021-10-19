import React, { Component } from 'react';
import c1 from '../images/icon-paper.svg';
import c2 from '../images/icon-scissors.svg';
import c3 from '../images/icon-rock.svg';

class Main extends Component {
    handleRules = () => {
        console.log('hi');
    }
    render() { 
        return (
        <main className="main">
            <div className="main__triangle">
                <div className="main__triangle__circle c1">
                    <img src={c1} alt="paperImg" />
                </div>
                <div className="main__triangle__circle c2">
                    <img src={c2} alt="paperImg" />
                </div>
                <div className="main__triangle__circle c3">
                    <img src={c3} alt="paperImg" />
                </div>
            </div>
            <div className="main__rules">
                <button onClick={this.props.ruleHandler}>RULES</button>
            </div>
        </main>
        );
    }
}

export default Main;