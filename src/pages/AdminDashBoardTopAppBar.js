import { Box, Button, List, ListItem, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../assets/MenuIcon";
import TopAppBar from "../components/appbar";
import AppDrawer from "../components/drawer";

import {
  BookOutlined,
  FitnessCenterOutlined,
  HomeOutlined,
  Person2Outlined,
  PhoneOutlined,
} from "@mui/icons-material";

const navbarListItems = [
  { title: "Home", link: "/", icon: <HomeOutlined /> },
  { title: "Learning", link: "/edu", icon: <BookOutlined /> },
  { title: "Fitness", link: "/fitness", icon: <FitnessCenterOutlined /> },
  { title: "About", link: "/about", icon: <Person2Outlined /> },
  { title: "Contact", link: "/contact-us", icon: <PhoneOutlined /> },
];

const StyledLinkBox = styled(Box)((theme) => ({
  color: "white",
  textDecoration: "none",
}));

const NavBarListItem = ({ title, link }) => {
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
      <Link to={link}>
        <StyledLinkBox>{title}</StyledLinkBox>
      </Link>
    </ListItem>
  );
};

export const AdminDashBoardDrawer = ({
  drawerOpenState,
  setDrawerOpenState,
}) => {
  return (
    <>
      <AppDrawer
        state={drawerOpenState}
        onOpen={() => setDrawerOpenState(true)}
        onClose={() => setDrawerOpenState(false)}
        listItems={navbarListItems}
      />
    </>
  );
};

export const AdminDashBoardTopAppBar = ({
  drawerOpenState,
  setDrawerOpenState,
}) => {
  return (
    <TopAppBar
      title={"AdminDashboardCrawler"}
      background="#14162E"
      logo={false}
      url="/"
      centered={true}
    >
      <Box component="nav" sx={{ display: { xs: "none", md: "block" } }}>
        <List sx={{ display: "inline-flex" }}>
          {navbarListItems.map(({ title, link }) => (
            <NavBarListItem title={title} link={link} key={title} />
          ))}
        </List>
      </Box>
      <Button
        sx={{ display: { xs: "flex", md: "none" } }}
        onClick={() => setDrawerOpenState(!drawerOpenState)}
      >
        <MenuIcon size={0.5} color="#6F3AFA" />
      </Button>
    </TopAppBar>
  );
};
