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
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/actions/appActions";
import { toastSuccess } from "./toastNotify";

// Add Information
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
  toastSuccess("Blog Added successfully!");
};

// Call Information
export const useFetch = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.app);
  const [blogList, setBlogList] = useState();

  useEffect(() => {
    // setIsLoading(true);
    dispatch(setLoading(true));

    const db = getDatabase();
    const userRef = ref(db, "blog");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const blogArray = [];

      for (let id in data) {
        blogArray.push({ id, ...data[id] });
      }
      setBlogList(blogArray);
      // setIsLoading(false);
      dispatch(setLoading(false));
    });
  }, []);
  return { loading, blogList };
};

export const DeleteBlog = (id) => {
  const db = getDatabase();
  const userRef = ref(db, "blog");
  remove(ref(db, "blog/" + id));

  toastSuccess("Deleted successfully!");
};

export const EditBlog = (initial) => {
  console.log(initial);
  const db = getDatabase();
  const updates = {};

  updates[`blog/${initial.id}`] = initial;
  toastSuccess("Updated successfully!");

  return update(ref(db), updates);
};
