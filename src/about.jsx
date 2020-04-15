import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function Page({}) {
  const p = useSearchParams()
  return (
    <div>
      <h1>About {p.toString()}</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
    </div>
  )
}
