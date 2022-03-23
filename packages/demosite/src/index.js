import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import './index.css'
import 'nanoether/colors.css'
import 'nanoether/fonts.css'
import 'nanoether/utils.css'
import 'nanoether/reset.css'

const RootApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
)

ReactDOM.hydrate(<RootApp />, document.getElementById('root'))
