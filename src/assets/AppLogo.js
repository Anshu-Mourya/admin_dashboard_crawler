import { Typography } from "@mui/material";
import React from "react";

const AppTitle = "Admin Dashboard Crawler";

/**
 *
 * @param {{ title: string, sx: SxProps<Theme>}} props
 *
 */
export const AppLogo = ({ title, sx, variant }) => {
  return (
    <Typography
      variant={variant ?? "h6"}
      component="h1"
      fontWeight="bold"
      sx={{
        textAlign: "center",
        marginY: 4,
        fontSize: "1.2rem",
        fontFamily: "Poppins",
        background:
          "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        display: "inline-block",
        ...sx,
      }}
    >
      {title ?? AppTitle}
    </Typography>
  );
};
