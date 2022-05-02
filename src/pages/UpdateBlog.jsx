import { useState } from "react";
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
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EditBlog } from "../helpers/firebaseContact";

const UpdateBlog = (props) => {
  const { currentUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const post = location.state.post;
  const [title2, setTitle] = useState(post.title);
  const [image2, setImage] = useState(post.image);
  const [content2, setContent] = useState(post.content);
  console.log(currentUser.email);
  console.log(post.id);
  console.log(title2);

  console.log(post);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const initial = {
      title: title2,
      author: currentUser.email,
      image: image2,
      content: content2,

      published_date: new Intl.DateTimeFormat("en", {
        dateStyle: "medium",
      }).format(Date.now()),
      id: post.id,
    };
    console.log(initial);
    EditBlog(initial);
    navigate("/");
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
            ── Update Blog ──
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid spacing={4}>
              <Grid item xs={12}>
                <TextField
                  sx={{ width: "400px", mb: 2 }}
                  id="title"
                  label="Title"
                  name="title"
                  variant="outlined"
                  type="text"
                  value={title2}
                  autoComplete="on"
                  onChange={(e) => setTitle(e.target.value)}
                  //   fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  sx={{ width: "400px", mb: 2 }}
                  id="image"
                  label="Image URL"
                  name="image"
                  variant="outlined"
                  type="image-url"
                  value={image2}
                  autoComplete="on"
                  onChange={(e) => setImage(e.target.value)}
                  //   fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  sx={{ width: "400px", mb: 2 }}
                  id="content"
                  label="Content"
                  name="content"
                  multiline
                  variant="outlined"
                  type="image-url"
                  value={content2}
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
                  fullWidth
                  type="submit"
                >
                  UPDATE
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Grid>
  );
};

export default UpdateBlog;
