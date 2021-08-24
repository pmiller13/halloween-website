import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {your_name} from './const.js';
import {Button, TextField} from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';



class TextInput extends React.Component {
  render() {
    return (
      <TextField style = {{width: 350}} id="outlined-basic" placeholder="many universes in many bubbles"  variant="outlined" className="text-input parent" />
    );
  }
}

class SubmitInput extends React.Component {
  render() {
    return (
<Button className="parent" variant="contained" onClick={() => { console.log('clicked') }}>Submit</Button>
    );
  }
}

class HomePage extends React.Component {
  render() {
    const msg = your_name();
    const msg2 = your_name();
    return (
      <div className="parentparent">
      <div className="parent">
        <div className="parentparent">
        <h1 className="parent">Welcome, 💀 {msg}</h1>
        </div>
        <div className="parentparent">
        <TextInput />
        </div>
        <div className="parentparent">
        <SubmitInput />
        </div>
      </div>
      </div>
    );
  }
}

ReactDOM.render(
  <HomePage />,
  document.getElementById('root')
);