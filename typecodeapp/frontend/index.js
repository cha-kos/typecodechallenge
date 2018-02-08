import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Root from './root';

import registerServiceWorker from './registerServiceWorker';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root/>, root);
  registerServiceWorker();
});
