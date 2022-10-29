import { Search } from "@mui/icons-material";
import { AppBar, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import FitnessAppLogo from "../components/FitnessAppLogo";

const TopBar = () => {
  return (
    <AppBar
      elevation={0}
      color="transparent"
      position="sticky"
      sx={{
        background: "rgba(243, 243, 253, 0.8)",
        backdropFilter: "blur(2px)",
        padding: {
          xs: "0 0px",
          md: "0 40px",
        },
      }}
    >
      <Toolbar
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "0px",
          marginLeft: 0,
          marginRight: 0,
          boxSizing: "border-box",
        }}
      >
        <FitnessAppLogo />
        <div
          style={{ display: "flex", flexGrow: 2, justifyContent: "flex-end" }}
        >
          <Button variant="outlined" sx={{ marginRight: 2 }}>
            <Search />
          </Button>
          <Link to="/fitness/dashboard" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              sx={{
                width: "170px",
                transition: "0.5s",
                borderColor: "rgba(58, 142, 246, 1)",
                // color: "rgba(138, 133, 133, 1)",
                "&:hover": {
                  background: "rgba(58, 142, 246, 1)",
                  color: "white",
                },
              }}
            >
              Go To DashBoard
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
