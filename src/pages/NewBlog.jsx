import React, { useState } from "react";
import { useSelector } from "react-redux";
import BlogForm from "../components/BlogForm";

const NewBlog = () => {
  const { currentUser } = useSelector((state) => state.auth);

  const [newBlog, setNewBlog] = useState({
    author: currentUser.email,
    title: "",
    content: "",
    get_comment_count: 0,
    get_like_count: 0,
    image: "",
    published_date: Date.now(),
  });

  return (
    <div>
      <BlogForm newBlog={newBlog} setNewBlog={setNewBlog} />
    </div>
  );
};

export default NewBlog;
