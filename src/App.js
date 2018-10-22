import React, { Component } from 'react';

import './App.css';
import DisplayPage from './components/display/display';
import ButtonPanelPage from './components/buttons/buttonPanel';

class App extends Component {

  result = 0;
  operation = '+';

  constructor(props) {
    super(props);

    this.state = {
      history: '',
      value: 0
    }
  }

  setHistory(history) {
    this.setState({
      history: history
    });
  }

  setValue(value) {
    this.setState({
      value: value
    });
  }

  performOperation(op) {

    switch (this.operation) {
  
      case '+': this.addOperation();
        break;

      case '-': this.subtractOperation();
        break;

      case '*': this.mulOperation();
        break;

      case '/': this.divOperation();
        break;

      case '%': this.modOperation();
        break;

    }

    this.operation = op;
    this.setHistory(this.state.history + ' ' + op + ' ');

    switch (op) {
      case '=': this.equalsOperation();
        break;

      case 'C': this.Clear();
        break;

    }

  }

  Clear() {
    this.setState({
      history: '',
      value: 0
    });
    this.result = 0;
    this.operation = '+';
  }

  equalsOperation() {
    this.setState({
      history: this.state.history +  ' = ' + this.result + ' ',
      value: this.result
    });
    this.result = 0;
    this.operation = '+';
  }

  addOperation() {
    this.result = this.result + this.state.value;
    this.setValue(0);
  }

  subtractOperation() {
    this.result = this.result - this.state.value;
    this.setValue(0);
  }

  mulOperation() {
    this.result = this.result * this.state.value;
    this.setValue(0);
  }

  divOperation() {
    this.result = this.result / this.state.value;
    this.setValue(0);
  }

  modOperation() {
    this.result = this.result % this.state.value;
    this.setValue(0);
  }

  render() {
    return (
      <div className="center-div">
        <DisplayPage data={this.state} />
        <ButtonPanelPage performOperation={this.performOperation.bind(this)} setHistory={this.setHistory.bind(this)} setValue={this.setValue.bind(this)} data={this.state} />
      </div>
    );
  }
}

export default App;
