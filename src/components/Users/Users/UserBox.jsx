import React from "react";
import icon from "../../../static/profile.png";
import { NavLink } from "react-router-dom";

const UserBox = (props) => {
  return (
    <div className="flex flex-row">
      <div className="flex-col">
        <NavLink to={"/profile/" + props.user.id}>
          <img
            src={props.user.photos.small ? props.user.photos.small : icon}
            className="w-14 rounded-full"
            alt="profileIcon"
          />
        </NavLink>

        {props.user.followed ? (
          <button
            type="submit"
            onClick={() => {
              props.unfollow(props.user.id);
            }}
            className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Unfollow
          </button>
        ) : (
          <button
            type="submit"
            onClick={() => {
              props.follow(props.user.id);
            }}
            className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Follow
          </button>
        )}
      </div>
      <div className="w-3/4 flex-col">
        <p>{props.user.name}</p>
        <p>{props.user.status}</p>
      </div>
      <div className="w-3/4 flex-col">location</div>
    </div>
  );
};

export default UserBox;
