import { app } from "./firebase";
import { useState, useEffect } from "react";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";

export const AddNewBlog = (newBlog) => {
  const db = getDatabase();
  const userRef = ref(db, "blog");
  const newUserRef = push(userRef);
  set(newUserRef, {
    author: newBlog.author,
    title: newBlog.title,
    content: newBlog.content,
    get_comment_count: newBlog.get_comment_count,
    get_like_count: newBlog.get_like_count,
    image: newBlog.image,
    published_date: newBlog.published_date,
  });
};
