import MenuIcon from "@mui/icons-material/Menu";

import {
  Button,
  Divider,
  Link as LN,
  List,
  ListItem,
  SwipeableDrawer,
  Typography,
} from "@mui/material";

import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBoxLearningApp from "../SearchBoxLearningApp";
import "./topbar.css";

export default function Topbar() {
  const [state, setState] = useState(false);
  const [innerWidth, setinnerWidth] = useState(window.innerWidth);
  const breakPoint = 675;
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  useEffect(() => {
    window.addEventListener("resize", () => setinnerWidth(window.innerWidth));
    return () => {};
  }, [innerWidth]);

  const list = (
    <Box
      sx={{
        maxWidth: "100%",
        width: "350px",
        height: "100%",
        backgroundColor: "rgba(11, 25, 41, 0.9)",
        zIndex: 1100,
        padding: "20px",
        boxShadow: "0 8px 32px 0 rgba(11, 25, 41, 0.37 )",
        backdropFilter: "blur( 4px )",
        borderTopRightRadius: "25px",
        borderBottomRightRadius: "25px",
        borderRight: "1px solid rgba( 255, 255, 255, 0.18 )",
        borderTop: "1px solid rgba( 255, 255, 255, 0.18 )",
        borderBottom: "1px solid rgba( 255, 255, 255, 0.18 )",
      }}
    >
      <Box
        sx={{
          height: "40px",
          marginBottom: "10px",
          display: "inline-flex",
        }}
        role="presentation"
      >
        <img
          src="/logo_icon.png"
          alt="App Logo"
          style={{ maxHeight: "100%" }}
        />
        <Typography
          variant="h4"
          component={"h1"}
          color="ThreeDFace"
          marginLeft={2}
        >
          Learning
        </Typography>
      </Box>
      <Divider style={{ backgroundColor: "rgb(254 254 254)" }} />
      <List>
        <ListItem></ListItem>
      </List>
    </Box>
  );
  return (
    <>
      <SwipeableDrawer
        open={state && innerWidth <= breakPoint}
        // open={true}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        anchor="left"
        PaperProps={{
          elevation: "0",
          sx: {
            background: "none",
          },
        }}
      >
        {list}
      </SwipeableDrawer>
      <div className="topbar">
        <nav>
          <LN href="/">
            <Box
              sx={{
                height: "40px",
              }}
              role="presentation"
            >
              <img
                src="/learning/logo.png"
                alt="App Logo"
                style={{ maxHeight: "100%" }}
              />
            </Box>
          </LN>
          <ul>
            <Link to={"/"}>
              <li>
                <Button variant="text">Home</Button>
              </li>
            </Link>
            <Link>
              <li>
                <Button variant="text">Courses</Button>
              </li>
            </Link>
            {/* <Link>
              <li>
                <Button variant="text">Brand</Button>
              </li>
            </Link> */}
            <Link to="/contact-us">
              <li>
                <Button variant="text">Contact</Button>
              </li>
            </Link>
            <Link to={"/about"}>
              <li>
                <Button variant="text">About</Button>
              </li>
            </Link>
            <li>
              <SearchBoxLearningApp />
              {/* <Button
                style={{
                  paddingTop: "10px",
                }}
                sx={{ display: { xs: "block", lg: "none" } }}
                onClick={() => setSearchFieldFocus(!searchFieldFocus)}
              >
                <Search />
              </Button> */}
            </li>
          </ul>

          <Box sx={{ display: innerWidth <= breakPoint ? "flex" : "none" }}>
            <SearchBoxLearningApp />
            <Button
              className="menuButton"
              style={{
                paddingTop: "10px",
              }}
              onClick={toggleDrawer(!state)}
            >
              <MenuIcon />
            </Button>
          </Box>
        </nav>
      </div>
    </>
  );
}
