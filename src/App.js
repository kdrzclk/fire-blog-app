import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import AppRouter from "./app-router/AppRouter";
import { auth } from "./helpers/firebase";
import { setCurrentUser } from "./redux/actions/authActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const userInfo = auth.onAuthStateChanged((user) => {
      dispatch(setCurrentUser(user));
    });
    return userInfo; // clean-up function
  }, [dispatch]);

  return (
    <div>
      <AppRouter />
      <ToastContainer />
    </div>
  );
};

export default App;
