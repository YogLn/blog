import React from 'react'
import ReactDOM from 'react-dom'
import CanvasNest from 'canvas-nest.js'

import App from './App'
import '@/assets/css/base.css'

const root = document.getElementById('root')
ReactDOM.render(<App />, root)
new CanvasNest(root, {
  color: '0,0,255',
  opacity: 0.7,
  zIndex: -2,
  count: 99
})