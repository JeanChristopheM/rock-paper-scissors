import {React, Component} from 'react';
import '../style/App.css';
import Header from './Header';
import Main from './Main';

class App extends Component {
  state = {
    score: 0
  }
  ruleHander = () => {
    this.setState({score: this.state.score + 1});
  }
  render() {
    return (
      <div className="App">
        <Header score={this.state.score} />
        <Main ruleHandler={this.ruleHander} />
      </div>
    );
  }
}

export default App;
