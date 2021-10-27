import React, { Component } from 'react';
import Symbol from './Symbol';

class Fight extends Component {
    render() { 
        const { pcPick, switchToResult } = this.props;
        let letsgo = false;
        if (pcPick === 'one' || pcPick === 'two' || pcPick === 'three') {
            letsgo = true;
            switchToResult();
        } else {
            setTimeout(
                () => {this.props.makePcPick()},3000
            );
        }
        return (
        <main className="fight">
            <div className="fight__pick">
                <Symbol circle={this.props.userPicked} />
            </div>
            <div className="fight__pcPick">
                {!letsgo && <Symbol circle={"empty"} />}
                {letsgo && <Symbol circle={pcPick} />}
            </div>
        </main>
        );
    }
}

export default Fight;