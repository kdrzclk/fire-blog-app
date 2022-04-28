import React, { useState } from "react";
import { useSelector } from "react-redux";
import BlogForm from "../components/BlogForm";
import { AddNewBlog } from "../helpers/firebaseContact";

const NewBlog = () => {
  const { currentUser } = useSelector((state) => state.auth);
  console.log(currentUser?.email);

  const [newBlog, setNewBlog] = useState({
    author: currentUser?.email,
    title: "",
    content: "",
    get_comment_count: 0,
    get_like_count: 0,
    image: "",
    published_date: Date.now(),
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(newBlog);
    AddNewBlog(newBlog);
  };

  return (
    <div>
      <BlogForm
        newBlog={newBlog}
        setNewBlog={setNewBlog}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default NewBlog;
