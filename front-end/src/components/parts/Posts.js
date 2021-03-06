/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PostItem from "./PostItem";
import Pagination from "./Pagination";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const postItems = posts.map((post) => <PostItem post={post} />);

  return (
    <div className="col-lg-8">
      <div className="blog-box list-style">
        {postItems}
        <Pagination />
      </div>
    </div>
  );
};

export default Posts;
