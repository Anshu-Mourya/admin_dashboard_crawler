import { Box } from "@mui/material";
import React, { useEffect } from "react";
import TopAppBar from "../../components/appbar";
const DashBoardAppBar = () => {
  return (
    <TopAppBar
      title={"Health&Fitness"}
      logo={
        <img src="/fitness/fitness_logo2.png" alt="App Icon" width="30px" />
      }
      uncentered={true}
    />
  );
};

const FitnessDashBoard = () => {
  useEffect(() => {
    document.title = "DashBoard | Health And Fitness";
  });

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        background: "rgba(243, 243, 253, 1)",
      }}
    >
      <DashBoardAppBar />
    </Box>
  );
};

export default FitnessDashBoard;
