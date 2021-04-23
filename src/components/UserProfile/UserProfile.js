import React from 'react'

function UserProfile(props) {

    let userImg = props.img;
    let userName = props.name;
    let id = props.id;
    let userRank = props.rank

    return (
        <div>
            <div key={id} className="">

                <div className="thumbnail">
                    <h4>
                        {userName}
                    </h4>
                    <img src={userImg} className="maxImgHeightWidth"/>
                    <div className="caption">

                        <h4>
                            Rank-  {userRank}
                        </h4>
                        <p>
                            <a href={`/hacker/${id}`} className="btn btn-primary">More Info</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
