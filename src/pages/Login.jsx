import React, { useState } from "react";
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
import { login, loginWithGoogle } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  // const { currentUser } = useSelector((state) => state.auth);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const styles = {
    image: {
      backgroundImage: "url(https://picsum.photos/1600/900)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      paddingTop: "40px",
    },
  };

  const handleGoogleSingIn = () => {
    loginWithGoogle();
  };

  const handleLogin = () => {
    login(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
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
            ── Login ──
          </Typography>

          <form>
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

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLogin}
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  sx={{ mb: 4 }}
                  variant="contained"
                  color="secondary"
                  onClick={handleGoogleSingIn}
                  fullWidth
                >
                  CONTINUE WITH GOOGLE
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Grid>
  );
};

export default Login;
