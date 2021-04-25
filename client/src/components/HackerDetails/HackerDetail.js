/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect, useParams } from 'react-router-dom'
import Nav from '../Navbar/Nav'

export default function HackerDetail() {
	const { id } = useParams()
	console.log(id)
	let [hackerId, setHackerId] = useState(id)
	let [hackerData, setHackerData] = useState(false)
	let [userLogIn, setUserLogIn] = useState(localStorage.getItem('loggedIn'))
	let [username, setUserName] = useState(localStorage.getItem('userName'))
	let [authenticate, setAuthenticate] = useState(true)

	/* useEffect hook to fetch data on initial load*/
	useEffect(() => {
		MakeNetworkCall()
	}, [])

	/*Function to make api call to load single hacker's data using user id*/
	const MakeNetworkCall = () => {

		let token = localStorage.getItem('token')
		axios.get(`/singleHacker/${hackerId}`, {
			headers: {
				'authentication': token
			}
		}).then(response => {
			if (response.data === "not authenticated") {
				setAuthenticate(false)
			}
			else {
				setHackerData(response.data)
			}
		})
			.catch(error => {
				return
			})

	}


	if (!authenticate) {
		return <Redirect to="/login" />
	}
	else

		return (
			<React.Fragment>
				<Nav />
				{userLogIn ?
					hackerData &&
					<div className="pagePadding maxWidth marginTop marginAuto">
						<div className="row">
							<div className="col-md-3">
								<p className="title">
									{hackerData.name}
								</p>
								<div className="list-group">
									<li className="list-group-item minHeight " >Location {hackerData.location}</li>
									<li className="list-group-item minHeight">Education- {hackerData.education}</li>
									<li className="list-group-item minHeight">Overall Rank- {hackerData.overallRank}</li>
									<li className="list-group-item minHeight" >Followers- {hackerData.followers}</li>
									<li className="list-group-item minHeight">Following- {hackerData.following}</li>
									<li className="list-group-item minHeight">Challenges Solved- {hackerData.challengesSolved}</li>
								</div>
							</div>
							<div className="">
								<div className="boxStyle">
									<img className="boxImgSize pagePadding" src={hackerData.profileLink} alt="" />
									<div className="caption-full">
										<h4 className="pull-right">
										</h4>

									</div>
								</div>
							</div>
						</div>
					</div>
					: <Redirect to="/login" />}

			</React.Fragment>
		)
}

