import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const TopAppBar = ({
  title,
  url,
  logo,
  children,
  background,
  hideAppName,
  uncentered,
}) => {
  return (
    <AppBar
      elevation={0}
      color="transparent"
      position="sticky"
      sx={{
        background: background ? background : "rgba(243, 243, 253, 0.8)",
        backdropFilter: "blur(2px)",
        maxWidth: "100%",
        padding: {
          xs: "0 0px",
          sm: "0 20px",
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
        <Link to={url ? url : "/fitness"}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: !uncentered ? "center" : "flex-start",
              width: "300px",
              gap: "20px",
            }}
          >
            {logo ? (
              <img
                src="/fitness/fitness_logo2.png"
                alt="Fitness App Logo"
                width="30px"
              />
            ) : (
              ""
            )}
            <Typography
              variant="h6"
              component="h1"
              fontWeight="bold"
              fontFamily="Poppins"
              sx={{
                display: {
                  xs: hideAppName ? "none" : "block",
                  md: "block",
                },
              }}
              style={{
                background:
                  "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%)",
                color: "wheat",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {title}
            </Typography>
          </Box>
        </Link>
        {children}
      </Toolbar>
    </AppBar>
  );
};
export default TopAppBar;
