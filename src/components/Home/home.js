import React,{useState} from 'react'

function home() {
  return (
    <div>
      <div id="landing-header">
        <h1>Welcome to HackerRank!</h1>
        <a href="/hacker-list" className="btn btn-lg btn-success">Go to Hackers Dashboard!</a>
      </div>

      <ul className="slideshow">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}


export default home


