import { Box, Typography } from "@mui/material";

const FitnessAppLogo = () => {
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
      <img src="/fitness/fitness_logo2.png" alt="App Icon" width="30px" />
      <Typography
        variant="h6"
        component="h1"
        fontWeight="bold"
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
        style={{
          background:
            "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Health&Fitness
      </Typography>
    </Box>
  );
};

export default FitnessAppLogo;
