import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ServiceWorker } from './components/ServiceWorker.js'

const Home = lazy(() => import('./home.js'))
const About = lazy(() => import('./about.js'))

function App() {
  return (
    <div>
      <ServiceWorker/>
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
