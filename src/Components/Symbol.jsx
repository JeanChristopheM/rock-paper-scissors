import React, { Component } from 'react';
import c1 from '../images/icon-paper.svg';
import c2 from '../images/icon-scissors.svg';
import c3 from '../images/icon-rock.svg';
import empty from '../images/icon-spock.svg';

class Symbol extends Component {
    state = {
        one: {
            src: c1,
            className: 'c1'
        }, 
        two: {
            src: c2,
            className: 'c2'
        },
        three: {
            src: c3,
            className: 'c3'
        },
        empty: {
            src: empty,
            className: 'empty'
        }
    };
    render() { 
        if (this.props.buttonHandler) {
            return (
                <div 
                className={`circle ${this.state[this.props.circle].className}`} 
                onClick={() => {this.props.buttonHandler(this.props.circle)}}
                >
                    <img src={this.state[this.props.circle].src} alt="paperImg" />
                </div>
                );
        } else {
            if (this.props.circle === "empty") {
                return (
                    <div 
                    className={`circle ${this.state[this.props.circle].className}`}
                    >
                        
                    </div>
                );
            } else {
                return (
                    <div 
                    className={`circle ${this.state[this.props.circle].className}`}
                    >
                        <img src={this.state[this.props.circle].src} alt="paperImg" />
                    </div>
                    );
            }
        }
    }
}

export default Symbol;