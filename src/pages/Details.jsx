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

const Details = (props) => {
  const { currentUser } = useSelector((state) => state.auth);
  console.log(currentUser);
  const location = useLocation();
  const post = location.state.post;
  console.log(post);

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
          <Card sx={{ minWidth: 250, width: "75vw" }}>
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
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              margin: 20,
            }}
          >
            {/* <Button
              variant="contained"
              // onClick={() => updateHandler(item.id)}
            >
              Update
            </Button>
            <Button
              variant="contained"
              color="secondary"
              // onClick={() => deleteHandler(item.id)}
            >
              Delete
            </Button> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Details;
