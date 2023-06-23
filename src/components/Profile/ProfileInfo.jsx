import React from "react";


const ProfileInfo = (props) => {
    return (
        <div className="flex flex-col mt-1 ml-5 text-start">
          <div className="font-bold">{props.profileInfo.name}</div>
          <div className="font-light">Date of birth: {props.profileInfo.date}</div>
          <div className="font-light">City: {props.profileInfo.city}</div>
          <div className="font-light">Education: {props.profileInfo.education}</div>
          <div className="font-light">
            Web Site: <a href="https://semantic-pie.org">semantic-pie.org</a>
          </div>
        </div>
    )
}

export default ProfileInfo