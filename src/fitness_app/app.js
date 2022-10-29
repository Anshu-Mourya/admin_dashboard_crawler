import { createTheme } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
});

const FitnessApp = () => {
  return (
    <>
      <Outlet context={{ theme }} />
    </>
  );
};

export default FitnessApp;
