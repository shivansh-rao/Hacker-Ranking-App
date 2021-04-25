import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'


const Nav = () => {

	let [userLogIn, setUserLogIn] = useState(localStorage.getItem('loggedIn'))
	let [username, setUserName] = useState(localStorage.getItem('userName'))
	


	const _logout = () => {
		const history = useHistory()
		axios.get("/logout")
			.then(response => {
				console.log(response.data)
				if (response.status === 200) {
					{
						localStorage.removeItem('loggedIn');
						localStorage.removeItem('userName');
						localStorage.removeItem('token');
						history.push("/login")
						setUserLogIn(false)
						setUserName(false)

					}
				}
			})
	}

	return (
		<React.Fragment >
			{
				userLogIn ?
					<div className="navbar-default">
						<div className="container-fluid">
							<div className="floatLeft header">
								<Link to='/'>Hacker-Ranking</Link>
							</div>
							<div className="collapse navbar-collapse">
								<div className="floatRight flexRow">
									{/* <li></li> */}
									<div><Link to="/hacker/statistics">Hacker Statistics</Link></div>
									<div><Link to="#">Logged In as {username}</Link></div>
									<div ><Link to="#" onClick={_logout}>LogOut</Link></div>
								</div>
							</div>
						</div>
					</div>
					:

					<div className="navbar-default">
						<div className="container-fluid">
							<div className="floatLeft header">
								<Link to='/'>Hacker-Ranking</Link>
							</div>
							<div className="collapse navbar-collapse">
								<div className="floatRight flexRow">
									<div><Link to="/login">Log In</Link></div>
									<div><Link to="/admin-panel">Log In As Admin</Link></div>
									<div><Link to="/register">Sign Up</Link></div>
								</div>
							</div>
						</div>
					</div>


			}
		</React.Fragment >


	)



}


export default Nav
