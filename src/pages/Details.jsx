import React from "react";
import {
  Container,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Button,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import moment from "moment";
import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import loadingGif from "../assets/loading.gif";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { DeleteBlog } from "../helpers/firebaseContact";
import { useNavigate } from "react-router-dom";

const Details = (props, { updateHandler }) => {
  const { currentUser } = useSelector((state) => state.auth);
  console.log(currentUser);
  const location = useLocation();
  const post = location.state.post;
  console.log(post);
  const navigate = useNavigate();

  const styles = {
    delete: {
      backgroundColor: "#e72b80",
      color: "white",
      "&:hover": {
        backgroundColor: "#c11261",
      },
    },

    update: {
      backgroundColor: "#f3e9e9",
      color: "black",
      "&:hover": {
        backgroundColor: "#a9a2a2",
      },
    },
  };

  const deleteHandler = (id) => {
    DeleteBlog(id);
    navigate("/");
  };
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 70,
          marginBottom: 20,
        }}
      >
        <Typography
          sx={{ textAlign: "center", margin: "10px", color: "#046582" }}
          variant="h3"
          noWrap
        >
          ──── Details ────
        </Typography>

        <div>
          <Card sx={{ width: "70vw", mx: "auto", mt: 2 }}>
            <div>
              <CardMedia
                sx={{ height: "0", paddingTop: "56.25%" }}
                image={post.image}
                title={post.title}
              />
              <CardContent
                sx={{ backgroundColor: "#efeefe", minHeight: "200px" }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{ textAlign: "center", margin: "10px", color: "#046582" }}
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  sx={{ textAlign: "center" }}
                >
                  {moment(post.published_date).format("MMM DD, YYYY")}
                </Typography>
                <p>{post.content}</p>
              </CardContent>
            </div>
            <CardActions>
              <AccountCircle sx={{ marginBottom: "7px" }} />
              <Typography gutterBottom variant="h6" component="h2">
                {post.author}
              </Typography>
            </CardActions>
            <CardActions>
              <IconButton aria-label="add to favorites" sx={{ p: 3 }}>
                <FavoriteIcon
                  color={post.get_like_count > 0 ? "secondary" : "disabled"}
                />
              </IconButton>
              <Typography variant="body2" color="textSecondary">
                {post.get_like_count}
              </Typography>
              <IconButton aria-label="comment count" sx={{ p: 3 }}>
                <ChatBubbleOutlineIcon />
              </IconButton>
              <Typography variant="body2" color="textSecondary">
                {post.get_comment_count}
              </Typography>
            </CardActions>
          </Card>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              margin: "20px",
            }}
          >
            {currentUser?.email === post.author ? (
              <>
                <Button
                  variant="contained"
                  sx={styles.update}
                  startIcon={<ModeEditOutlineOutlinedIcon />}
                  onClick={() =>
                    updateHandler(post.id, post.title, post.content, post.image)
                  }
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  sx={styles.delete}
                  startIcon={<DeleteIcon />}
                  onClick={() => deleteHandler(post.id)}
                >
                  Delete
                </Button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Details;
