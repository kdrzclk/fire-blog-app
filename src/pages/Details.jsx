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
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import moment from "moment";

const Details = () => {
  return (
    <Container>
      <div style={{ margin: "70px auto" }}>
        <Typography
          sx={{ textAlign: "center", color: "#046582", margin: "50px" }}
          variant="h3"
          noWrap
        >
          ──── Details ────
        </Typography>

        <Card>
          <CardActionArea>
            <CardMedia
              sx={{ height: "140px" }}
              // image={image} title={title}
            />
            <CardContent sx={{ backgroundColor: "#efeefe", height: "125px" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                sx={{ color: "#046582" }}
              >
                title
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                date
                {/* {moment(published_date).format("MMM DD, YYYY")} */}
              </Typography>
              <p
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  TextOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                content
              </p>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <AccountCircle sx={{ marginBottom: "7px" }} />
            <Typography gutterBottom variant="h6" component="h2">
              author
            </Typography>
          </CardActions>

          <CardActions>
            <IconButton aria-label="comment count" sx={{ p: 3 }}>
              <FavoriteIcon
              // color={get_like_count > 0 ? "secondary" : "disabled"}
              />
            </IconButton>
            <Typography variant="body2" color="textSecondary">
              get_like_count
            </Typography>
            <IconButton aria-label="comment count" sx={{ p: 3 }}>
              <ChatBubbleOutlineIcon />
            </IconButton>
            <Typography variant="body2" color="textSecondary">
              get_comment_count
            </Typography>
          </CardActions>
        </Card>
      </div>
    </Container>
  );
};

export default Details;
