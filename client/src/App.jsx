import React from 'react';
import axios from 'axios';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      double: undefined
    };
    this.changeState = this.changeState.bind(this);
  }
  sendNumber() {
    console.log('ha', this.state.number);
    axios
      .post('/doubleNumber', {
        number: this.state.number
      })
      .then(response => {
        this.setState({
          double: response.data
        });
      })
      .catch(err => {
        console.log('got an error doing axios request', err);
      });
  }
  changeState(number) {
    console.log('you want to change the state', number);
  }
  render() {
    return (
      <div>
        enter a number, server will double it and send it back
        <br />
        <input
          type="text"
          onChange={e => this.setState({ number: e.target.value })}
        />
        <button onClick={() => this.sendNumber()}>submit</button>
        <h1>{this.state.double}</h1>
      </div>
    );
  }
}
export default App;
