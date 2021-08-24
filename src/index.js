import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {your_name} from './const.js';
import {Button, TextField} from '@material-ui/core';


class FormSubmission extends React.Component {
  constructor(props){
    super(props);
    this.state = {
         welcome: your_name(),
         inputtext: "",
         data: 'many universes in many bubbles'
      }
    this.handleEvent = this.handleEvent.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
  }
  handleTextFieldChange(i){
    console.log(i);
  }
  handleEvent(){
    //var this_text = this.state.inputtext;
    this.setState({inputtext: ''});
  }
  render() {
    return (
      <div>
        <div className="parentparent">
          <h1 className="parent">Welcome, 💀 {this.state.welcome}</h1>
        </div>
        <div className="parentparent">
          <TextField style = {{width: 350}} id="outlined-basic" onChange={swag => this.handleTextFieldChange(swag.target.value)} defaultValue={this.state.inputtext} placeholder={this.state.data} variant="outlined" className="text-input parent" />
        </div>
        <div className="parentparent">
          <Button className="parent" variant="contained" onClick={() => this.handleEvent()}>Submit</Button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <FormSubmission />,
  document.getElementById('root')
);