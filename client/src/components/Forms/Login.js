/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'
import {  Redirect } from 'react-router-dom'
import Nav from '../Navbar/Nav'


function Login() {
  let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")
  let [loggedIn, setLoggedIn] = useState(false)
  let [error, setError] = useState(false)
  let [errorMsg, setErrorMsg] = useState(null)


  useEffect(() => {
    console.log(loggedIn)
  }, [loggedIn])

  const login = (f) => {
    f.preventDefault()
    console.log("log in details", username)
    let userData = {
      username: username,
      password: password
    }

    axios.post("/login", userData)
      .then(response => {

        if (response.data.user === false) {
          setError(true)
          setErrorMsg("Wrong Email or Password")
        }
        else {
          localStorage.setItem('loggedIn', true);
          localStorage.setItem('userName', response.data.user.username);
          localStorage.setItem('token', response.data.token);
          setError(false)
          setErrorMsg(null)
          return setLoggedIn(true)
        }

      }).catch(err => {
        setError(true)
        setErrorMsg("Wrong Email or Password")
      })
  }

  if (loggedIn)
    return <Redirect to="/hacker-list" />
  else
    return (
      <React.Fragment>
        <Nav />
        <div className="whiteFont">
          <div className="marAuto" id="f" >
            <div className="text-center sheet--padding-bottom">
              <h4 className="alpha text-weight--bold "><b>Login to HackerRank</b></h4>
              <p>Don't have any account? <a rel="nofollow" href="/register">Register</a></p>
            </div>
            <div className="form">
              <form onSubmit={login}>

                <div className="maxWidth marAuto">
                  <div className="">
                    <div className="form-group marginTop marginBottom">
                      <label>Username</label>
                      <input onChange={(e) => setUsername(e.target.value)} autoFocus="autofocus" className="form-control js-validate-field-on-blur" required="required" type="text" name="username" />

                    </div>
                  </div>

                  <div className="marginBottom">
                    <div className="form-group">
                      <label >Password</label>
                      <input onChange={(e) => setPassword(e.target.value)} className="form-control" type="password" name="password" />

                    </div>
                  </div>


                  <div className="form-group text-center" id="s">
                    <button className="btn btn-lg btn-primary" type="submit">
                      Login
                        </button>
                  </div>

                </div>
              </form>
              {error && <div className="error">
                {errorMsg}
              </div>
              }
            </div>
          </div>
        </div>
      </React.Fragment>
    )
}

export default Login
