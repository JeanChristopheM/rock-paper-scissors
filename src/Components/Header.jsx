import React, { Component } from 'react';
import titleLogo from '../images/logo.svg';

class Header extends Component {

    render() {
        return (
            <header className="header">
                <h1 className="header__title">
                    <img src={titleLogo} alt="logo" />
                </h1>
                <div className="header__score">
                    <p>SCORE</p>
                    <p>{this.props.score}</p>
                </div>
            </header>
        );
    };
}

export default Header;