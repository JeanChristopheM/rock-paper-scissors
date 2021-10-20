import React, { Component } from 'react';
import Symbol from './Symbol';

class Fight extends Component {
    render() { 
        return (
        <main className="fight">
            <div className="fight__pick">
                <Symbol circle={this.props.userPicked} />
            </div>
            <div className="fight__pcPick">
                <Symbol circle={"empty"} />
            </div>
        </main>
        );
    }
}
 
export default Fight;