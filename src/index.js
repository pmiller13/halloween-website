import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {your_name} from './const.js';
import axios from 'axios';
import {Button, TextField} from '@material-ui/core';


function FormSubmission() {
    const [input_text, textfieldChange] = useState("");
    const placeholdertext = "many universes in many bubbles";
    function handleSubmit() {
        if (input_text === "") {
            return 1;
        }
        const payload = JSON.stringify(
            {
                'text': input_text
            }
        );
        axios.post('http://0.0.0.0:8080/upload', payload,
            {
                headers:{'Access-Control-Allow-Origin' : '0.0.0.0:8080'},
                auth:{username: 'yolo', password: '123swagswag321'}
            })
            .then(function (response) {
                textfieldChange('');

            })
            .catch(function (error) {
                console.log(error);
            }
        );
        return 0;
    }
    return (
        <div>
            <div className="parentparent">
              <TextField style = {{width: 350}} id="outlined-basic" value={input_text} onChange={event => textfieldChange(event.target.value)} placeholder={placeholdertext} variant="outlined" className="text-input parent" />
            </div>
            <div className="parentparent">
              <Button className="parent" variant="contained" onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    );
}

function FuncForm() {
    const welcome = your_name();
    return (
      <div>
        <div className="parentparent">
          <h1 className="parent">Welcome, 💀 {welcome}</h1>
        </div>
        <FormSubmission />
      </div>
    );
}

ReactDOM.render(
  <FuncForm />,
  document.getElementById('root')
);