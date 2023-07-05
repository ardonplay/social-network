import { connect } from "react-redux";
import Post from "./Post";

const mapStateToProps = (state) => {
  return {
    posts: state.profile_data.posts,
  };
};

const Posts = (props) => {
  let posts =
    props.posts !== undefined
      ? props.posts.map((post) => (
          <Post
            name={post.name}
            date={post.date}
            message={post.message}
            profileIcon={post.profileIcon}
            key={post.id}
          />
        ))
      : undefined;
    return ( <div className="flex flex-col items-start mt-3">{posts}</div>)
};


const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;
