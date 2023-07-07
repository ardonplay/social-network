import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import { setLoadingActionCreator } from "../../redux/loading-reducer";
import { setProfileInfoActionCreator } from "../../redux/profile-reducer";
import Preloader from "../common/Preloader";
import { useParams } from "react-router-dom";
class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setLoading(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.id}`)
      .then((request) => {
        this.props.setLoading(false);
        this.props.setProfile({
          name: request.data.fullName,
          contact: request.data.contacts.website,
          profile_icon: request.data.photos.small,
        });
      });
  }
  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Preloader />
        ) : (
          <Profile
            profile_data={this.props.profile_data}
            dispatch={this.props.dispatch}
          />
        )}{" "}
      </>
    );
  }
}

let mapStateToProps = (state) => {
    return {
      profile_data: state.profile_data,
      isLoading: state.loading_data.isLoading,
    };
  };
  
  let mapDispatchToProps = {
    setLoading: setLoadingActionCreator,
    setProfile: setProfileInfoActionCreator,
  };

const CringeComponent = (props) => {
    const params = useParams();

    
    return (<ProfileContainer id={params.id} {...props}/>)
}

export default connect(mapStateToProps, mapDispatchToProps)(CringeComponent);
