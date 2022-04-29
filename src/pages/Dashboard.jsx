import React from "react";
import BlogCard from "../components/BlogCard";
import { Typography, Grid } from "@mui/material";
import { useFetch } from "../helpers/firebaseContact";
// import { useSelector } from "react-redux";
import loadingGif from "../assets/loading.gif";

const Dashboard = () => {
  const { blogList } = useFetch();
  // const { loading } = useSelector((state) => state.app);

  return (
    <div style={{ marginTop: "70px" }}>
      <Typography
        sx={{ textAlign: "center", color: "#046582" }}
        variant="h3"
        noWrap
      >
        ──── Dashboard ────
      </Typography>
      <>
        <Grid container sx={{ flexGrow: 1 }} spacing={5} justify="center">
          <Grid item xs={12}>
            <Grid container justify="center" spacing={5}>
              {blogList === undefined ? (
                <img src={loadingGif} alt="loading" />
              ) : blogList ? (
                blogList?.map((item, id) => (
                  <Grid key={id} item>
                    <BlogCard post={item} />
                  </Grid>
                ))
              ) : (
                <h3>No data available.</h3>
              )}
            </Grid>
          </Grid>
        </Grid>
      </>
    </div>
  );
};

export default Dashboard;
