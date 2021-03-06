import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import blog from "../assets/blok.png";
import google from "../assets/google.png";

import { useNavigate } from "react-router-dom";
import { signup, loginWithGoogle } from "../helpers/firebase";
import { useSelector, useDispatch } from "react-redux";
import { setLoading, clearLoading } from "../redux/actions/appActions";
import loadingGif from "../assets/loading.gif";
import { toastError, toastSuccess } from "../helpers/toastNotify";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.app);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const styles = {
    image: {
      backgroundImage: "url(https://picsum.photos/1600/900)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100vw",
      height: "120vh",
      paddingTop: "40px",
    },
    register: {
      backgroundColor: "#046582",
      color: "white",
      fontWeight: "bold",
      "&:hover": {
        color: "#046582",
        backgroundColor: "#D5D5D5",
      },
    },
    googleImg: {
      width: 75,
      marginLeft: 10,
    },
    googleBtn: {
      backgroundColor: "white",
      fontWeight: "bold",
      mb: 4,
      color: "black",
      "&:hover": {
        backgroundColor: "#D5D5D5",
      },
    },
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(setLoading());
    signup(email, password)
      .then(() => {
        navigate("/");
        dispatch(clearLoading());
        toastSuccess("Registered successfully!");
      })
      .catch((error) => {
        dispatch(clearLoading());
        toastError(error.message);
      });
  };

  const handleGoogleSingIn = () => {
    loginWithGoogle();
  };

  return (
    <Grid container justify="center" sx={styles.image}>
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75);",
          height: "fit-content",
          marginTop: 10,
          maxWidth: "300px",
        }}
      >
        <Box
          sx={{
            height: "100%",
            marginTop: "10vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="avatar_img"
            src={blog}
            sx={{
              width: 200,
              height: 200,

              backgroundColor: "#046582",
            }}
          />
          <Typography
            variant="h4"
            component="h1"
            sx={{ m: 4, color: "#046582" }}
          >
            ?????? Register ??????
          </Typography>

          <form onSubmit={handleRegister}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  label="email"
                  name="email"
                  variant="outlined"
                  type="email"
                  // value={email ?? ""}
                  autoComplete="on"
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password"
                  label="password"
                  name="password"
                  variant="outlined"
                  type="password"
                  autoComplete="current-password"
                  // value={password ?? ""}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>

              {loading ? (
                <div
                  style={{
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "275px",
                  }}
                >
                  <Box
                    xs={{ d: "flex", mt: 2 }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <img src={loadingGif} width="75px" alt="loading_gif" />
                  </Box>{" "}
                </div>
              ) : (
                <>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      sx={styles.register}
                      variant="contained"
                      color="primary"
                      onClick={handleRegister}
                      fullWidth
                    >
                      Register
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      sx={styles.googleBtn}
                      variant="contained"
                      color="secondary"
                      onClick={handleGoogleSingIn}
                      fullWidth
                    >
                      WITH
                      <img style={styles.googleImg} src={google} alt="google" />
                    </Button>
                  </Grid>
                </>
              )}
            </Grid>
          </form>
        </Box>
      </Container>
    </Grid>
  );
};

export default Register;
