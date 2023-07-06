import React from "react";
import icon from "../../static/profile.png";

const Users = (props) => {
  let users = props.users.map((user) => (
    <div className="flex flex-row" key={user.id}>
      <div className="flex-col">
        <img src={icon} className="w-14" alt="profileIcon" />
        {user.followed ? (
          <button
            type="submit"
            onClick={() => {props.unfollow(user.id)}}
            className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Unfollow
          </button>
        ) : (
          <button
            type="submit"
            onClick={() => {props.follow(user.id)}}
            className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Follow
          </button>
        )}
      </div>
      <div className="w-3/4 flex-col">
        <p>{user.name}</p>
        <p>{user.status}</p>
      </div>
      <div className="w-3/4 flex-col">
        {user.location.city}, {user.location.country}
      </div>
    </div>
  ));
  return (
    <div className="m-5">
      <div className="flex flex-col">{users}</div>
    </div>
  );
};

export default Users;
