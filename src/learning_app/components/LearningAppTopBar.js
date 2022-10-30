import { Search } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  List,
  ListItem,
  Menu,
  Toolbar,
} from "@mui/material";
import LearningAppLogo from "./LearningAppLogo";

import styled from "@emotion/styled";
import {
  BookOutlined,
  FitnessCenterOutlined,
  HomeOutlined,
  Person2Outlined,
  PhoneOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const navbarListItems = [
  { title: "Courses", link: "/", icon: <BookOutlined /> },
  { title: "About", link: "/about", icon: <Person2Outlined /> },
  { title: "Contact", link: "/contact-us", icon: <PhoneOutlined /> },
];

const StyledLinkBox = styled(Box)((theme) => ({
  color: "white",
  textDecoration: "none",
}));

const NavBarListItem = ({ title, link, setState }) => {
  return (
    <ListItem
      sx={{
        "&:after": {
          content: "''",
          position: "absolute",
          bottom: "0px",
          maxWidth: "100%",
          height: "2px",
          transform: "scaleX(0)",
          background: "pink",
          left: "0",
          transition: "0.5s",
        },
        "&:hover:after": {
          transform: "scaleX(0.8)",
        },
      }}
    >
      <Link
        to={link}
        onClick={() => {
          setState(false);
        }}
      >
        <StyledLinkBox>{title}</StyledLinkBox>
      </Link>
    </ListItem>
  );
};

const TopBar = ({ drawerState, setDrawerState }) => {
  return (
    <AppBar
      elevation={0}
      color="transparent"
      position="sticky"
      sx={{
        background: "#2f0743b5",
        backdropFilter: "blur(2px)",
        padding: {
          xs: "0 0px",
          md: "0 40px",
        },
      }}
    >
      <Toolbar
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "0px",
          marginLeft: 0,
          marginRight: 0,
          boxSizing: "border-box",
        }}
      >
        <LearningAppLogo />
        <Box component="nav" sx={{ display: { xs: "none", md: "block" } }}>
          <List sx={{ display: "inline-flex" }}>
            {navbarListItems.map(({ title, link }) => (
              <NavBarListItem
                title={title}
                link={link}
                key={title}
                setState={setDrawerState}
              />
            ))}
            <ListItem>
              <Button variant="outlined" sx={{ marginRight: 2 }}>
                <Search />
              </Button>
            </ListItem>
            <ListItem sx={{ display: { xs: "block", md: "none" } }}>
              <Button
                style={{ transform: "scale(0.6)" }}
                variant="outlined"
                sx={{ marginRight: 2 }}
                onClick={() => setDrawerState(!drawerState)}
              >
                <Menu />
              </Button>
            </ListItem>
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
