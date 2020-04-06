import React from 'react'
import ReactDOM from 'react-dom'
import { sample } from 'lodash-es'

function App() {
  return (
    <div className="text-xl font-bold text-pink-600 m-6">
      {sample(['yep', 'yup', 'yeah', 'hell no!'])}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
