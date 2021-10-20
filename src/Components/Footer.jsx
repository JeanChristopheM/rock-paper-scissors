import React, { Component } from 'react';

class Footer extends Component {
    render() { 
        return (
            <footer className="footer">
                <button onClick={this.props.ruleHandler}>RULES</button>
            </footer>
        );
    }
}

export default Footer;