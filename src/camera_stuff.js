import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import axios from 'axios';
import { Button, TextField } from '@material-ui/core';


import ImagePreview from './ImagePreview/index.js'; // source code : ./src/demo/AppWithImagePreview/ImagePreview

function CameraStuff() {
  const [input_text, textfieldChange] = useState('');
  const [dataUri, setDataUri] = useState('');
  const [submit_text, submitText] = useState("Submit");
  const [submit_disabled, submitDisabled] = useState(false);
  const placeholdertext = "many universes in many bubbles";

  function buttonPushSuccess() {
    submitText("Success");
    setTimeout(function () {
      textfieldChange('');
      submitText('Submit');
    }, 1000)
  }
  function buttonPushFail() {
    submitText("Failed");
    setTimeout(function () {
      submitText('Submit');
    }, 1000)
  }
  function handleSubmit() {
    if (input_text === "" || dataUri === '' || input_text.length >= 256) {
      buttonPushFail();
      return 1;
    }
    submitDisabled(true);
    const payload = JSON.stringify(
      {
        'text': input_text,
        'image': dataUri,
      }
    );
    axios.post('https://bitmover.solutions:8443/upload', payload,
      {
        headers: { 'Access-Control-Allow-Origin': '*' },
        auth: { username: 'yolo', password: '123swagswag321' }
      })
      .then(function (response) {
        buttonPushSuccess();
        setDataUri('');
      })
      .catch(function (error) {
        console.log(error);
        buttonPushFail();
      })
      .then( () => {
        submitDisabled(false);
      });
    return 0;
  }
  function handleTakePhotoAnimationDone(dataUri) {
    console.log('takePhoto');
    setDataUri(dataUri);
  }
  function resetPreview() {
    setDataUri('');
    textfieldChange('');
  }
  const isFullscreen = false;
  return (
    <div>
      <div>
        {
          (dataUri)
            ?
            <div>

              <ImagePreview dataUri={dataUri}
                isFullscreen={isFullscreen}
              />
            </div>
            :
            <div>
              <Camera onTakePhotoAnimationDone={handleTakePhotoAnimationDone} idealResolution = {{width: 480, height: 480}}

                isFullscreen={isFullscreen}
              />
            </div>
        }
      </div>
      <div className="parentparent">
      </div>
      <div className="parentparent">
        <TextField style={{ width: 350 }} id="outlined-basic" value={input_text} onChange={event => textfieldChange(event.target.value)} placeholder={placeholdertext} variant="outlined" className="text-input parent" />
      </div>
      <div className="parentparent">
        <Button className="parent" disabled={submit_disabled} variant="contained" onClick={handleSubmit}>{submit_text}</Button>
        <Button className="parent" variant="contained" onClick={resetPreview}>Reset</Button>
      </div>
    </div>
  );
}

export default CameraStuff;