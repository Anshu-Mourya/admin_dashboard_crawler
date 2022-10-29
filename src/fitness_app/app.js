import { createTheme } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const theme = createTheme({
  components: {},
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
