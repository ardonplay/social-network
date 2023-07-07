import React from "react";
import UserBox from "./UserBox";
const Users= (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

  return (
    <div className="m-5">
      {pages.map((page) => (
        <div
          onClick={() => {
            props.onPageChanged(page);
          }}
          key={page}
          className={
            props.currentPage === page
              ? " text-amber-500 font-bold"
              : "font-bold"
          }
        >
          {page}
        </div>
      ))}
      <div className="flex flex-col">
        {props.users.map((user) => (
          <UserBox
            key={user.id}
            user={user}
            follow={props.follow}
            unfollow={props.unfollow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
