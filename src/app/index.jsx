import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './core/App';

const root = document.createElement('div');

root.setAttribute('id', 'root');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
