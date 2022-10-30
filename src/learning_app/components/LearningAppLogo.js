import { Box, Typography } from "@mui/material";

const LearningAppLogo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContents: "center",
        width: "300px",
        gap: "20px",
      }}
    >
      <img src="/learning/logo_icon.png" alt="App Icon" width="30px" />
      <Typography
        variant="h6"
        component="h1"
        fontWeight="bold"
        sx={
          {
            // display: {
            //   xs: "none",
            //   sm: "block",
            // },
          }
        }
        style={{
          // background:
          //   "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%)",
          background: "linear-gradient(to right, #ff6a00, #ee0979)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Let's Learn
      </Typography>
    </Box>
  );
};

export default LearningAppLogo;
