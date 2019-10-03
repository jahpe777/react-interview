import React, { Component } from 'react';
import Button from './Button/Button'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    }
  }

  incrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    return (
      <div className="App">
        <Button update={this.incrementItem}/>
        <p>{this.state.clicks}</p>
      </div>
    );
  }
}

export default App;
