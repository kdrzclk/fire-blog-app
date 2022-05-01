import React, { useState } from "react";
import { useSelector } from "react-redux";
import BlogForm from "../components/BlogForm";
import { AddNewBlog } from "../helpers/firebaseContact";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const navigate = useNavigate();
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
    navigate("/");
    setNewBlog({
      author: currentUser.email,
      title: "",
      content: "",
      get_comment_count: 0,
      get_like_count: 0,
      image: "",
      published_date: Date.now(),
    });
  };

  const updateHandler = (id, title, content, image) => {
    setNewBlog({ id, title, content, image });
  };

  return (
    <div>
      <BlogForm
        newBlog={newBlog}
        setNewBlog={setNewBlog}
        handleFormSubmit={handleFormSubmit}
        updateHandler={updateHandler}
      />
    </div>
  );
};

export default NewBlog;
