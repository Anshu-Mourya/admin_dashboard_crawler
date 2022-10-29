import { Box } from "@mui/material";
import React, { useEffect } from "react";
import BlurDesign from "../components/BlurDesign";
const About = () => {
  useEffect(() => {
    document.title = "About | Admin Dashboard Crawler";
  });
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background: "rgba(243, 243, 253, 1)",
        position: "relative",
      }}
    >
      <BlurDesign />
    </Box>
  );
};

export default About;
