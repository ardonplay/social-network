import React from "react";
import UserBox from "./UserBox";
import Pages from "./Pages";
const Users= (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);

    const  getArrayAroundIndex = (pagesLength, currentPage, outputPagesLength) => {
      const startIndex = Math.max(1, currentPage - Math.floor(outputPagesLength / 2));
      const endIndex = Math.min(startIndex + outputPagesLength -1, pagesLength - 1);
      
      const resultArray = [];
      for (let i = startIndex; i <= endIndex; i++) {
        resultArray.push(i);
      }
      
      return resultArray;
    }
    
    const pages = Array.from({length: pagesCount}, (_, i) => i + 1);

    const result = getArrayAroundIndex(pages.length, props.currentPage, 10);
    
  return (
    <div className="m-5 w-96">
      <Pages pages={result} onPageChanged={props.onPageChanged} currentPage={props.currentPage} />
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
