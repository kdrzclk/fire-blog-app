import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import cwLogo from "../assets/cw.jpeg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../helpers/firebase";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentUser } from "../redux/actions/authActions";
import { clearLoading } from "../redux/actions/appActions";
import { toastSuccess } from "../helpers/toastNotify";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.auth);
  // const currentUser = true;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogout = () => {
    setAnchorEl(null);
    logout();

    dispatch(clearCurrentUser());
    dispatch(clearLoading());
    navigate("/login");
    toastSuccess("Log Out successfully!");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#046582" }}>
        <Toolbar>
          <Typography
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <img src={cwLogo} alt="cw" width="40px" />
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            ──── <span style={{ color: "#F5DEB3" }}>{"<KaDiR/>"}</span> Blog
            ────
          </Typography>

          {currentUser ? (
            <div>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Typography
                  sx={{
                    marginRight: "1rem",
                  }}
                >
                  {currentUser?.displayName}
                </Typography>

                <AccountCircle />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={handleClose}
                  onMouseUp={() => navigate("/profile")}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  onMouseUp={() => navigate("/new")}
                >
                  New
                </MenuItem>
                <MenuItem onClick={handleClose} onMouseUp={handleLogout}>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <div>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} onMouseUp={handleLogin}>
                  Login
                </MenuItem>
                <MenuItem onClick={handleClose} onMouseUp={handleRegister}>
                  Register
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
