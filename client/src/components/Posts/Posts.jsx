import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const Posts = () => {
  const classes = useStyles();
  const post = useSelector((rootReducer) => rootReducer.posts);
  console.log(post);
  return (
    <>
      <Post />
      <Post />
      <Post />
    </>
  );
};

export default Posts;
