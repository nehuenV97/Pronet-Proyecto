import React from 'react'
import ReactDOM from 'react-dom/client'
import { PronetApp } from './App'

import './index.css';

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PronetApp />
    </BrowserRouter>
  </React.StrictMode>,
)
