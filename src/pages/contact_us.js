import {
  BookOutlined,
  FitnessCenterOutlined,
  HomeOutlined,
  Person2Outlined,
  PhoneOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Input,
  InputLabel,
  List,
  ListItem,
  styled,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../assets/MenuIcon";
import TopAppBar from "../components/appbar";
import BlurDesign from "../components/BlurDesign";
import AppDrawer from "../components/drawer";

const ContactUs = () => {
  const [drawerOpenState, setDrawerOpenState] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | Admin Dashboard Crawler";
    document.body.style.background = "#14162E";
    return () => {
      document.body.style.background = "#fff";
    };
  });

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
            width: "100%",
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

  const navbarListItems = [
    { title: "Home", link: "/", icon: <HomeOutlined /> },
    { title: "Learning", link: "/edu", icon: <BookOutlined /> },
    { title: "Fitness", link: "/fitness", icon: <FitnessCenterOutlined /> },
    { title: "About", link: "/about", icon: <Person2Outlined /> },
    { title: "Contact", link: "/contact-us", icon: <PhoneOutlined /> },
  ];
  return (
    <>
      <AppDrawer
        state={drawerOpenState}
        onOpen={() => setDrawerOpenState(true)}
        onClose={() => setDrawerOpenState(false)}
        listItems={navbarListItems}
      />
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          background: "#14162E",
          position: "relative",
        }}
      >
        <BlurDesign />
        <TopAppBar
          title={"Admin Dashboard Crawler"}
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
        <Box>
          <Stack
            sx={{
              width: {
                xs: "100%",
                md: "calc(100% - 10%)",
              },
              position: {
                xs: "absolute",
                md: "static",
              },
              top: "0",
              height: {
                xs: "100vh",
                md: "700px",
              },
              alignItems: "center",
              marginTop: { xs: 0, md: 4 },
              paddingY: 4,
              paddingTop: {
                xs: 12,
                md: 4,
              },
              marginX: "auto",
              background: "rgba(255,255,255, 0.0)",
              backdropFilter: "blur(5px)",
              border: "1px solid #ffffff02",
              boxSizing: "border-box",
              borderRadius: {
                xs: 0,
                md: 4,
              },
              boxShadow: "0 0 12px 2px rgba(0,0,0, 0.2)",
              zIndex: "1",
            }}
          >
            <Typography
              variant="h5"
              component="h1"
              fontWeight="bold"
              color="#fff"
            >
              Contact Us
            </Typography>

            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              sx={{
                width: "calc(100% - 20px)",
              }}
            >
              <Box>
                <FormControl>
                  <InputLabel htmlFor="my-input">Email address</InputLabel>
                  <Input
                    required
                    id="Email Address"
                    aria-describedby="Email Address"
                  />
                  {/* <FormHelperText id="my-helper-text">
                      We'll never share your email.
                    </FormHelperText> */}
                </FormControl>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default ContactUs;
