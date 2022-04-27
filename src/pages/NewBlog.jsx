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

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");

  const styles = {
    submit: {
      backgroundColor: "#046582",
      color: "white",
      fontWeight: "bold",
      "&:hover": {
        color: "#046582",
        backgroundColor: "#D5D5D5",
      },
    },
  };
  return (
    <Grid container justify="center">
      <Container
        maxWidth="sm"
        sx={{ height: "fit-content", maxWidth: "600px" }}
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
              width: 220,
              height: 220,
              marginTop: "20px",
              backgroundColor: "#046582",
            }}
          />

          <Typography
            variant="h4"
            component="h1"
            sx={{ m: 4, color: "#046582" }}
          >
            ── New Blog ──
          </Typography>

          <form>
            <Grid spacing={4}>
              <Grid item xs={12}>
                <TextField
                  sx={{ width: "400px", mb: 2 }}
                  id="title"
                  label="Title"
                  name="title"
                  variant="outlined"
                  type="title"
                  // value={email ?? ""}
                  autoComplete="on"
                  onChange={(e) => setTitle(e.target.value)}
                  //   fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  sx={{ width: "400px", mb: 2 }}
                  id="image-url"
                  label="Image URL"
                  name="image-url"
                  variant="outlined"
                  type="image-url"
                  // value={email ?? ""}
                  autoComplete="on"
                  onChange={(e) => setImageUrl(e.target.value)}
                  //   fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  sx={{ width: "400px", mb: 2 }}
                  id="outlined-multiline-static"
                  label="Content"
                  name="outlined-multiline-static"
                  multiline
                  variant="outlined"
                  type="image-url"
                  // value={email ?? ""}
                  autoComplete="on"
                  onChange={(e) => setContent(e.target.value)}
                  //   fullWidth
                  required
                  rows={15}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  sx={styles.submit}
                  variant="contained"
                  //   color="primary"
                  //   onClick={handleLogin}
                  fullWidth
                >
                  SUBMIT
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Grid>
  );
};

export default NewBlog;
