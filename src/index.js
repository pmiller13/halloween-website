import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {your_name} from './const.js';
import {Button, TextField} from '@material-ui/core';


class TextInput extends React.Component {
  render() {
    return (
      <TextField id="outlined-basic"  variant="outlined" className="text-input center" />
    );
  }
}

class SubmitInput extends React.Component {
  render() {
    return (
<Button variant="contained" onClick={() => { console.log('clicked') }}>Default</Button>
    );
  }
}

class HomePage extends React.Component {
  render() {
    const msg = your_name();
    return (
      <div>
      <div className="center">
        <h1>Welcome, 💀 {msg}</h1>
      </div>
      <div className="center">
        <TextInput />
      </div>
      <div className="center-button">
        <SubmitInput />
      </div>
      </div>
    );
  }
}

ReactDOM.render(
  <HomePage />,
  document.getElementById('root')
);