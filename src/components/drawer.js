import { Box, Drawer, List, ListItem, ListItemButton } from "@mui/material";

import React from "react";

import { Link } from "react-router-dom";
import { AppLogo } from "../assets/AppLogo";

const AppDrawer = ({ state, onOpen, onClose, listItems }) => {
  return (
    <Drawer
      role={"term"}
      open={state}
      PaperProps={{
        elevation: 0,
        sx: {
          background: "none",
        },
      }}
      onOpen={onOpen}
      onClose={onClose}
    >
      <Box
        sx={{
          maxWidth: "100%",
          width: "350px",
          height: "100%",
          backgroundColor: "#14162e91",
          zIndex: 1100,
          padding: "20px",
          boxShadow: "0 8px 32px 0 rgba(11, 25, 41, 0.37 )",
          backdropFilter: "blur(4px)",
          borderTopRightRadius: "25px",
          borderBottomRightRadius: "25px",
          borderRight: "1px solid rgba( 255, 255, 255, 0.18 )",
          borderTop: "1px solid rgba( 255, 255, 255, 0.18 )",
          borderBottom: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
      >
        <AppLogo />
        <List sx={{ marginTop: 4 }}>
          {listItems.map((items) => (
            <ListItem key={items.title}>
              <ListItemButton
                sx={{
                  fontSize: "1.2rem",
                  marginBottom: 2,
                  "&:hover": {
                    background: "#14162e91",
                  },
                }}
              >
                <Link
                  to={items.link}
                  style={{
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  {items?.icon}
                  {items.title}
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
export default AppDrawer;
