import { connect } from "react-redux";
import Users from "./Users";
import {
  followActionCreator,
  setUsersActionCreator,
  unfollowActionCreator,
} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
  return {
    users: state.users_data.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => {
        debugger
      dispatch(followActionCreator(id));
    },
    unfollow: (id) => {
        debugger
      dispatch(unfollowActionCreator(id));
    },
    setUsers: (users) => {
        dispatch(setUsersActionCreator(users))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
