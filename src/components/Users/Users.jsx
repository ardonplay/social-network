import React from "react";
import axios from "axios";
import UserBox from "./UserBox";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((request) => {
        this.props.setUsers(request.data.items);
        this.props.setTotalCount(request.data.totalCount);
      });
  }
  onPageChanged = (page) => {
    this.props.setPage(page);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((request) => {
        this.props.setUsers(request.data.items);
      });
  };
  render() {
    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div className="m-5">
        {pages.map((page) => (
          <div
            onClick={() => {
              this.onPageChanged(page);
            }}
            key={page}
            className={
              this.props.currentPage === page
                ? " text-amber-500 font-bold"
                : "font-bold"
            }
          >
            {page}
          </div>
        ))}
        <div className="flex flex-col">
          {this.props.users.map((user) => (
            <UserBox
              key={user.id}
              user={user}
              follow={this.props.follow}
              unfollow={this.props.unfollow}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
