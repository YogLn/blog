import React from 'react';
import ReactDOM from 'react-dom';
import CanvasNest from 'canvas-nest.js';

import App from './App';
import '@/assets/css/base.css'

const root = document.getElementById('root')
  const cn = new CanvasNest(root, {
    color: '0,0,255',
    opacity: 0.7,
    zIndex: 1,
    count: 99,
  });

ReactDOM.render(
    <App />,
    root
);
