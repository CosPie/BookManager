import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import About from './components/about';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( < App / > , document.getElementById('root'));

registerServiceWorker();