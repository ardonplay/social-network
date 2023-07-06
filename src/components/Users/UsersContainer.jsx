import { connect } from "react-redux";
import Users from "./Users";
import {
  followActionCreator,
  setCurrentPageActionCreator,
  setTotalCountActionCreator,
  setUsersActionCreator,
  unfollowActionCreator,
} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
  return {
    users: state.users_data.users,
    totalCount: state.users_data.totalCount,
    pageSize: state.users_data.pageSize,
    currentPage: state.users_data.currentPage
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => {
      dispatch(followActionCreator(id));
    },
    unfollow: (id) => {
      dispatch(unfollowActionCreator(id));
    },
    setUsers: (users) => {
        dispatch(setUsersActionCreator(users))
    },
    setPage: (page) => {
        dispatch(setCurrentPageActionCreator(page))
    },
    setTotalCount: (totalCount) => {
        dispatch(setTotalCountActionCreator(totalCount))
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Users);
