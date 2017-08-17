import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import "./bootstrap/dist/css/bootstrap.css";
import "./bootswatch/journal/bootstrap.css"

render(<App />, document.getElementById('root'));
registerServiceWorker();
