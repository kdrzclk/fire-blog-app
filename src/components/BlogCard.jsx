import { AccountCircle } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const BlogCard = () => {
  return (
    <Card sx={{ minWidth: "345px", maxWidth: "345px" }}>
      <CardActionArea
      //   onClick={openDetails}
      >
        <CardMedia
          sx={{ height: "140px" }}

          //   image={image || placeholder}
          //   title={title}
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
            {/* {moment(published_date).format("MMM DD, YYYY")} */}
          </Typography>
          <p
            style={{
              display: "-webkit-box",
              "-webkit-line-clamp": 2,
              "-webkit-box-orient": "vertical",
              "text-overflow": "ellipsis",
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
        <IconButton aria-label="add to favorites" sx={{ p: 3 }}>
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
  );
};

export default BlogCard;
