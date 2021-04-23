import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Nav from '../Navbar/Nav'
import { Redirect } from 'react-router-dom'
import UserProfile from '../UserProfile/UserProfile'

function HackersList() {
    let [hackerList, setHackerList] = useState(false)
    let [top3HackerList, setTop3HackerList] = useState(false)
    let [authenticate, setAuthenticate] = useState(true)
    let [userLogIn, setUserLogIn] = useState(localStorage.getItem('loggedIn'))
    let [username, setUserName] = useState(localStorage.getItem('userName'))

    /* useEffect hook to fetch data on initial load*/
    useEffect(() => {
        fetchHackerList()
        fetchTop3Hackers()
    }, [])

    /*Function to make api call to load top 3 hackers using limit 3 in api call*/
    const fetchTop3Hackers = () => {
        let token = localStorage.getItem('token')
        let body = {
            limit: 3
        }
        axios.post("http://localhost:3001/hackers/topHackers", body,
            {
                headers: {
                    'authentication': token
                }
            }
        )
            .then(response => {
                console.log(response.data)
                if (response.data === "not authenticated" || response.data.name === "JsonWebTokenError") {
                    setAuthenticate(false)
                }
                else {
                    setTop3HackerList(response.data);
                    setAuthenticate(true);
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    /*Function to make api call to load all hacker's data*/
    const fetchHackerList = () => {
        let token = localStorage.getItem('token')
        axios.get("http://localhost:3001/hackers",
            {
                headers: {
                    'authentication': token
                }
            }
        )
            .then(response => {
                console.log(response.data)
                if (response.data === "not authenticated" || response.data.name === "JsonWebTokenError") {
                    setAuthenticate(false)
                }
                else {
                    setHackerList(response.data);
                    setAuthenticate(true);
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    if (!authenticate) {
        return <Redirect to="/login" />
    }
    else
        return (
            <div>
                <Nav />
                {userLogIn ?
                    <div className="">
                        <div className="header">Our Top Hackers</div>
                        <div className="flexRowSpcEvn">
                            {top3HackerList && top3HackerList?.map((topHacker, index) =>
                                <div className="marAuto">
                                    <div className={`whiteBackground pointerCursor marginBottom`}>
                                        <img className={`userProfileImg  circleImg`} src={topHacker.profileLink} />
                                        <div className={`userInfoContainer grow`}>
                                            <a className={`title`} href={`/hacker/${topHacker._id}`}>{topHacker.name}</a>
                                            <div className={`subTitle`}>{topHacker.overallRank}</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="grid-container pagePadding" >
                            {hackerList && hackerList?.map((hacker, index) =>
                                <UserProfile
                                    name={hacker.name}
                                    img={hacker.profileLink}
                                    id={hacker._id}
                                    rank={hacker.overallRank}
                                />
                            )}
                        </div>
                    </div>
                    : <Redirect to="/login" />}
            </div>
        )
}


export default HackersList
