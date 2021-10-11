import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StandardImageList from './imagelist.js';
import CameraStuff from './camera_stuff.js';
import { your_name } from './const.js';
import Gallery from "./gallery.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function FuncForm() {

  const welcome = your_name();
  return (
    <Router>
      <Switch>
      <Route path="/gallery">
          <div>
            <div className="parentparent">
              <Gallery />
            </div>
          </div>
        </Route>
        <Route path="/">
          <div>
            <div className="parentparent">
              <h1 className="parent">Welcome, 💀 {welcome}</h1>
            </div>
            <div className="parentparent">
              <CameraStuff />
            </div>
            <div className="parentparent">
              <StandardImageList />
            </div>
          </div>
        </Route>

      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <FuncForm />,
  document.getElementById('root')
);