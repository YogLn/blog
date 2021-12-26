import React from 'react'
import ReactDOM from 'react-dom'
import CanvasNest from 'canvas-nest.js'

import App from './App'
import '@/assets/css/base.css'

const root = document.getElementById('root')
ReactDOM.render(<App />, root)
new CanvasNest(root, {
  color: '255, 148, 253',
  opacity: 0.8,
  zIndex: -1,
  count: 200
})