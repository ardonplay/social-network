import React from "react";
import axios from "axios";
import Users from "./Users/Users";
import { connect } from "react-redux";
import {
  followActionCreator,
  setCurrentPageActionCreator,
  setTotalCountActionCreator,
  setUsersActionCreator,
  unfollowActionCreator,
} from "../../redux/users-reducer";
import { setLoadingActionCreator } from "../../redux/loading-reducer";
import Preloader from "../common/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setLoading(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((request) => {
        this.props.setLoading(false)
        this.props.setUsers(request.data.items);
        this.props.setTotalCount(request.data.totalCount);
      });
  }
  onPageChanged = (page) => {
    this.props.setPage(page);
    this.props.setLoading(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((request) => {
        this.props.setLoading(false)
        this.props.setUsers(request.data.items);
      });
  };
  render() {
    return <>{this.props.isLoading ? <Preloader />: <Users {...this.props} onPageChanged={this.onPageChanged}/> } </>;
  }
}



let mapStateToProps = (state) => {
  return {
    users: state.users_data.users,
    totalCount: state.users_data.totalCount,
    pageSize: state.users_data.pageSize,
    currentPage: state.users_data.currentPage,
    isLoading: state.loading_data.isLoading
  };
};

let mapDispatchToProps = {
    follow: followActionCreator,
    unfollow: unfollowActionCreator,
    setUsers: setUsersActionCreator,
    setPage: setCurrentPageActionCreator,
    setTotalCount: setTotalCountActionCreator,
    setLoading: setLoadingActionCreator
};


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
