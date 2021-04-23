import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Nav from '../Navbar/Nav'

function Register() {
  let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")
  let [email, setEmail] = useState("")
  let [ph, setPh] = useState("")
  let [registered, setRegistered] = useState(false)

  const register = (f) => {
    f.preventDefault()
    console.log("ada", f)
    const user = {
      username: username,
      email: email,
      password: password,
      ph: ph
    }
    axios.post("http://localhost:3001/register", user)
      .then(res => {
        console.log("user posted")
        return setRegistered(true)

      })
      .catch(err => console.log(err))
  }

  if (registered)
    return <Redirect to="/login" />
  else
    return (
      <React.Fragment>
        <Nav />
        <div className="whiteFont">

          <div className="" id="h">
            <div className="">
              <h4 className="alpha text-weight--bold">Join HackerRank</h4>
              <p>Already have an account? <a rel="nofollow" href="/login">Login</a></p>
            </div>
          </div>


          <div className="form" id="f">
            <form onSubmit={(e) => { register(e) }}>
              <div className="maxWidth marAuto">
                <div className="">
                  <div className="form-group marginTop marginBottom">
                    <label >
                      Email address
</label>
                    <input onChange={(e) => setEmail(e.target.value)} className="form-control js-validate-field-on-blur" required="required" type="email" name="email" id="user_email" />

                  </div>
                </div>
                <div className="">
                  <div className="form-group marginBottom">
                    <label >
                      Username <span className="text-secondary">(only letters, numbers, and underscores)</span>
                    </label>
                    <input onChange={(e) => setUsername(e.target.value)} className="form-control js-validate-field-on-blur" pattern="[a-zA-Z0-9_]*[a-zA-Z][a-zA-Z0-9_]*" required="required" type="text" name="username" id="user_username" />

                  </div>
                </div>

                <div className="">
                  <div className="form-group marginBottom">
                    <label >
                      Password <span className="text-secondary">(min. 6 char)</span>
                    </label>
                    <input onChange={(e) => setPassword(e.target.value)} autoComplete="off" minLength="6" className="form-control js-validate-field-on-blur" required="required" type="password" name="password" id="user_password" />

                  </div>
                </div>
                <div className="">
                  <div className="form-group marginBottom">
                    <label >
                      Phone Number
    </label>
                    <input onChange={(e) => setPh(e.target.value)} autoComplete="off" minLength="6" className="form-control js-validate-field-on-blur" required="required" type="tel" name="ph" id="phone" />

                  </div>
                </div>


                <div className="">
                  <div className="form-group">
                    <button className="btn btn-lg btn-primary" name="veg" type="submit">
                      SUBMIT
          </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

        </div>

      </React.Fragment>
    )
}

export default Register


