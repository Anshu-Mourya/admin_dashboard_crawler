import { AppBar, Box } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AppLogo } from "../assets/AppLogo";
import BlurDesign from "../components/BlurDesign";

export default function NotFound() {
  useEffect(() => {
    document.title = "Error | Page Not Found";
  });
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        background: "#14162E",
        position: "relative",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <BlurDesign />
      <AppBar
        elevation={0}
        sx={{
          background: "transparent",
          alignItems: { xs: "center", sm: "flex-start" },
          justifyContent: "space-between",
          paddingX: "20px",
        }}
      >
        <Link to="/">
          <AppLogo
            variant="h6"
            sx={{
              marginY: {
                xs: 2,
                md: 4,
              },
            }}
          />
        </Link>
      </AppBar>
      <Box
        sx={{
          width: {
            xs: "calc(100% - 100px)",
            md: "800px",
          },
          position: "relative",
          top: "140px",
        }}
      >
        <img src="/404_illustration_hd.png" alt="page not found" width="100%" />
      </Box>
    </Stack>
  );
}
