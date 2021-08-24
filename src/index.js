import React from 'react';
import useState from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {your_name} from './const.js';
import {Button, TextField} from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';


function Foobar() {
    //var input = document.getElementById('outlined-basic').text;
    //const [title, setTitle] = useState('');

    return 10;
}

class FormSubmission extends React.Component {
  render() {
    const msg = your_name();
    return (
      <div>
        <div className="parentparent">
          <h1 className="parent">Welcome, 💀 {msg}</h1>
        </div>
        <div className="parentparent">
          <TextField style = {{width: 350}} id="outlined-basic" ref="Text01" placeholder="many universes in many bubbles"  variant="outlined" className="text-input parent" />
        </div>
        <div className="parentparent">
          <Button className="parent" variant="contained" onClick={() => { console.log(Foobar()); }}>Submit</Button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <FormSubmission />,
  document.getElementById('root')
);