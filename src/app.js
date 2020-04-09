import React, { Suspense, lazy, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Workbox} from 'workbox-window';

const Home = lazy(() => import('./home.js'))
const About = lazy(() => import('./about.js'))

function App() {

  // attempt to register the service worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const wb = new Workbox('/sw.js');
      wb.register();
    }
  },[])

  return (
    <div>
      <h1>Welcome</h1>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  )
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
)
