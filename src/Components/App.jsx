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
    buttonClicked:0,
    pcPick: 9
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
  makePcPick = () => {
    const pick = Math.floor(Math.random() * 3);
    switch (pick) {
      case 0:
        this.setState({pcPick: 'one'}, () => {console.log(this.state.pcPick)});
        break;
      case 1: 
        this.setState({pcPick: 'two'}, () => {console.log(this.state.pcPick)});
        break;
      default: 
        this.setState({pcPick: 'three'}, () => {console.log(this.state.pcPick)});
    }
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
          <Fight userPicked={this.state.buttonClicked} makePcPick={this.makePcPick} pcPick={this.state.pcPick} />
        }
        {resultsStatus && 
          <Result />
        }
        <Footer ruleHandler={this.ruleHandler} pcPick={this.state.pcPick} />
      </div>
    );
  }
}

export default App;
