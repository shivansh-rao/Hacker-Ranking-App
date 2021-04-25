/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Nav from '../Navbar/Nav'
import { Line, Pie, } from "react-chartjs-2";


function Statistics() {

    let [top10HackerData, setTop10HackerData] = useState(false)
    let [updatedHackerDetail, setUpdatedHackerDetail] = useState(false)
    let [CPPData, setCPPData] = useState(false)
    let [authenticate, setAuthenticate] = useState(true)
    let [deviceData, setDeviceData] = useState(false)
    let userLogIn = useState(localStorage.getItem('loggedIn'))

    /* useEffect hook to fetch data on initial load*/
    useEffect(() => {
        fetchTopHackers()
        fetchHackerList()
        fetchRecentlyUpdatedDetails()
    }, [])


    /*Function to map graph data for c++ graph and device distribution graph*/
    const mapUserData = (userArr) => {
        let tempArr = [0, 0, 0]
        let cppArr = []
        let usernameArr = []

        userArr.sort(function (a, b) { return b?.competitivePercentiles?.cpp - a?.competitivePercentiles?.cpp; });
        

        userArr.map((singleUser, index) => {
            if (singleUser?.competitivePercentiles?.deviceType === "Laptop")
                tempArr[0]++;
            else if (singleUser?.competitivePercentiles?.deviceType === "Tablet")
                tempArr[1]++;
            else if (singleUser?.competitivePercentiles?.deviceType === "Mobile")
                tempArr[2]++;
            usernameArr.push(singleUser.name)
            cppArr.push(singleUser?.competitivePercentiles?.cpp)

        })
        const state = {
            labels: ['Laptop', 'Tablet', 'Mobile'],
            datasets: [
                {
                    label: 'Device Distribution Chart',
                    backgroundColor: [
                        '#B21F00',
                        '#C9DE00',
                        '#2FDE00',

                    ],
                    hoverBackgroundColor: [
                        '#501800',
                        '#4B5000',
                        '#175000',
                    ],
                    data: tempArr
                }
            ]
        }

        const cppData = {
            labels: usernameArr,
            datasets: [
                {
                    label: "C++ dataset",
                    data: cppArr,
                    fill: true,
                    backgroundColor: "rgba(75,192,192,0.2)",
                    borderColor: "white",
                    lineTension: 0.5,

                }
            ]
        };
        setCPPData(cppData)
        setDeviceData(state)

    }

    /*Function to make api call to load recentely updated data*/
    const fetchRecentlyUpdatedDetails = () => {
        let token = localStorage.getItem('token')
        axios.get(`/hackers/recentlyUpdated`, {
            headers: {
                'authentication': token
            }
        }).then(response => {
                if (response.data === "not authenticated") {
                    setAuthenticate(false)
                }
                else {
                    setUpdatedHackerDetail(response.data)
                }
            })
            .catch(error => {
                return
            })
    }

    /*Function to make api call to load all hacker's data*/
    const fetchHackerList = () => {
        let token = localStorage.getItem('token')
        axios.get("/hackers",
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
                    mapUserData(response.data);
                    setAuthenticate(true);
                }
            })
            .catch(error => {
                return
            })
    }

    /*Function to make api call to load top 10 hackers usinh limit 10 in api call*/
    const fetchTopHackers = () => {
        let token = localStorage.getItem('token')
        let body = {
            limit: 10
        }
        axios.post(`/hackers/topHackers`, body, {
            headers: {
                'authentication': token
            }
        }).then(response => {
                if (response.data === "not authenticated") {
                    setAuthenticate(false)
                }
                else {
                    setTop10HackerData(response.data)
                }
            })
            .catch(error => {
                return            })

    }


    if (!authenticate) {
        return <Redirect to="/login" />
    }
    else
        return (
            <div>
                <Nav />
                {userLogIn ?
                    <div>
                        <div className="header">
                            Top Hackers
                    </div>
                        <div className="grid-container pagePadding">
                            {top10HackerData && top10HackerData?.map((topHacker, index) =>
                                <div className="marAuto">
                                    <div className={`whiteBackground pointerCursor marginBottom`}>
                                        <img className={`userProfileImg  circleImg`} src={topHacker.profileLink} alt=""/>
                                        <div className={`userInfoContainer grow`}>
                                            <a className={`title`} href={`/hacker/${topHacker._id}`}>{topHacker.name}</a>
                                            <div className={`subTitle`}>{topHacker.overallRank}</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>


                        <div className="">{deviceData &&
                            <div className="graphWidth marAuto marginBottom"><Pie
                                data={deviceData}
                                options={{
                                    title: {
                                        display: true,
                                        text: 'Device Distribution',
                                        fontSize: 40,
                                        fontColor: 'white',
                                    },
                                    legend: {
                                        labels: {
                                            fontColor: "white",
                                            fontSize: 18
                                        },
                                        display: true,
                                        position: 'right'
                                    }
                                }}
                            /></div>}

                            {
                                CPPData &&
                                <div className="graphWidth marAuto marginBottom"><Line
                                    data={CPPData}
                                    scaleFontColor='red'
                                    options={{
                                        scaleFontColor: 'red',
                                        title: {
                                            display: true,
                                            text: 'CPP Distribution',
                                            fontSize: 40,
                                            fontColor: 'white',
                                        },
                                        legend: {
                                            labels: {
                                                fontColor: "white",
                                                fontSize: 18
                                            },

                                            display: true,
                                            position: 'right'
                                        },

                                    }}

                                />
                                </div>
                            }
                        </div>

                        {
                            updatedHackerDetail &&
                            <div>
                                <div className="header">
                                    Latest Updated Hackers Data
                                </div>
                                <div className="col2 pagePadding gridgap1">
                                    {updatedHackerDetail && updatedHackerDetail?.map((latestUpdated, index) =>
                                        <div className="backgroundWhite">
                                            <div className={`pointerCursor pagePadding`}>
                                                <div className={`col2 grow`}>
                                                    <a className={`title`} href={`/hacker/${latestUpdated._id}`}>{latestUpdated.name}</a>
                                                    <div className={`subTitle`}>Rank- {latestUpdated.overallRank}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        }

                    </div>
                    :
                    <Redirect to="/login" />}
            </div>
        )
}

export default Statistics
