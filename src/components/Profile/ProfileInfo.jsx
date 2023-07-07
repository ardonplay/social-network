import React from "react";


const ProfileInfo = (props) => {
    return (
        <div className="flex flex-col mt-1 ml-5 text-start">
          <div className="font-bold">{props.profileInfo.name}</div>
          <div className="font-light">Date of birth: 04.03.2004</div>
          <div className="font-light">City: MINSK</div>
          <div className="font-light">Education: BSUIR'25</div>
          <div className="font-light">
            Contact: <a href={props.profileInfo.contact}>{props.profileInfo.contact}</a>
          </div>
        </div>
    )
}

export default ProfileInfo