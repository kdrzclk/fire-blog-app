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

const BlogCard = () => {
  return (
    <Card>
      <CardActionArea
      //   onClick={openDetails}
      >
        <CardMedia

        //   image={image || placeholder}
        //   title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            title
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* {moment(published_date).format("MMM DD, YYYY")} */}
          </Typography>
          <p>content</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <AccountCircle />
        <Typography gutterBottom variant="h6" component="h2">
          author
        </Typography>
      </CardActions>
      <CardActions>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon
          //   color={get_like_count > 0 ? "secondary" : "disabled"}
          />
        </IconButton> */}
        <Typography variant="body2" color="textSecondary">
          get_like_count
        </Typography>
        {/* <IconButton aria-label="comment count">
          <ChatBubbleOutlineIcon />
        </IconButton> */}
        <Typography variant="body2" color="textSecondary">
          get_comment_count
        </Typography>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
