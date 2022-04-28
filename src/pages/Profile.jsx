import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
        marginTop: "100px",
      }}
    >
      <Card
        sx={{
          minWidth: "275px",
          maxWidth: "500px",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "25px",
        }}
      >
        <img
          src={currentUser?.photoURL}
          alt="profile"
          style={{ borderRadius: "50%", width: "100px" }}
        />

        <CardContent>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "700", mb: 1, mt: 3 }}
          >
            Display Name:
          </Typography>

          <Typography variant="h5">
            {currentUser?.displayName || "Not Found!"}
          </Typography>

          <Typography sx={{ mb: 1, mt: 3, fontWeight: "700" }}>
            Email:
          </Typography>

          <Typography variant="h5">
            {currentUser?.email || "Not Found!"}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
