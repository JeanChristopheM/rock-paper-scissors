import {React, Component} from 'react';
import '../style/App.css';
import Header from './Header';
import Main from './Main';
import Fight from './Fight';
import Result from './Result';
import Footer from './Footer';

class App extends Component {
  state = {
    layouts: [
      {name: 'initial', status: true},
      {name: 'picked', status: false},
      {name: 'results', status: false}
    ],
    score: 0,
    buttonClicked:0
  }
  ruleHandler = () => {
    this.setState({score: this.state.score + 1});
  }
  buttonHandler = (argument) => {
    this.setState({buttonClicked: argument});
    const layouts = [...this.state.layouts];
    for (let item of layouts) {
      item.status = false;
    }
    layouts[1].status = true;
    this.setState({layouts: layouts});
  }


  render() {
    const { layouts: [{status: InitialStatus},{status: pickedStatus}, {status: resultsStatus}] } = this.state;

    return (
      <div className="App">
        <Header score={this.state.score} />
        {InitialStatus && 
          <Main buttonHandler={this.buttonHandler} /> 
        }
        {pickedStatus &&
          <Fight userPicked={this.state.buttonClicked} />
        }
        {resultsStatus && 
          <Result />
        }
        <Footer ruleHandler={this.ruleHandler} />
      </div>
    );
  }
}

export default App;
