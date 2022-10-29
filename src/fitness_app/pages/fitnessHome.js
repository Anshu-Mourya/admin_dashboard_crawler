import { Favorite, Search } from "@mui/icons-material";

import {
  AppBar,
  Box,
  Button,
  Chip,
  Stack,
  styled,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";

import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import "../FitnessApp.css";

import HeartSvg from "../svgs/heart_icon.svg";

import Footer from "../components/FitnessAppFooter";

import TopBar from "../components/FitnessAppTopBar";
import SearchBox from "../components/SearchBox.js";

const BodyTypographyStyled = styled(Typography)((theme) => ({
  fontWeight: "500",
  fontFamily: "Poppins",
  color: "rgba(138, 133, 133, 1)",
  marginTop: "30px",
  width: "182px",
}));

const Block1 = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: {
          xs: "0px 20px",
          md: "0px 60px",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginBottom: "60px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100px",
          height: "100px",
          top: "250px",
          left: "180px",
          boxShadow:
            "rgb(68 97 242 / 20%) 0px 0px 185px 120px, rgb(68 97 242 / 20%) 0px 0px 72px 42px inset",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          width: "100px",
          height: "100px",
          top: "275px",
          right: "200px",
          boxShadow:
            "rgb(68 97 242 / 20%) 0px 0px 185px 120px, rgb(68 97 242 / 20%) 0px 0px 72px 42px inset",
        }}
      ></div>
      <Chip
        variant="outlined"
        sx={{
          margin: {
            xs: "40px 0 20px 0",
            sm: "60px 0 40px 0",
          },
        }}
        label={
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Typography color="rgba(82, 82, 82, 1)">Health Matters</Typography>
            <Favorite color="warning" />
          </Box>
        }
      />
      <Typography
        variant="h3"
        component={"p"}
        fontWeight="bold"
        fontFamily="Poppins"
        sx={{
          fontSize: {
            xs: "1.2rem",
            sm: "3rem",
            md: "3rem",
          },
        }}
        maxWidth="462px"
      >
        <span style={{ color: "rgb(22 120 242)" }}>One Step Solution </span>
        for all your dietary needs.
      </Typography>
      <Box
        sx={{
          position: { xs: "static", md: "absolute" },
          top: "80px",
          right: "20px",
          width: {
            md: "calc(100% - 100px)",
          },
          maxWidth: "400px",
          userSelect: "none",
        }}
      >
        <img
          width={"100%"}
          src="/fitness/doctor_illustration2.png"
          alt="Doctor Illustration"
        />
      </Box>
      <Typography
        variant="body1"
        component="p"
        fontWeight="500"
        fontFamily="Poppins"
        maxWidth="422px"
        width="calc(100% - 20px)"
        color="rgba(138, 133, 133, 1)"
        marginTop="30px"
      >
        Using your BMI index we calculate whether the dish is suitable for you.
      </Typography>
      <SearchBox
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
        }}
        label="Search Your Product"
        onClickMic={() => console.log("Mic")}
        onClickSearch={(e) => alert(`Welcome ${e.value}!`)}
        onClickPicture={(e) => console.log("Pic")}
      />
    </Box>
  );
};

const Block2 = () => {
  return (
    <Stack
      direction={{ sm: "row" }}
      flexGrow={2}
      flexWrap="wrap"
      justifyContent="space-between"
      width="100%"
      sx={{
        padding: "40px 60px",
        marginTop: "20px",
      }}
    >
      <Box>
        <Typography
          variant="h5"
          component="h2"
          color="#1678F2"
          textTransform="uppercase"
          letterSpacing="8px"
          fontWeight="700"
          marginBottom={2}
        >
          features we provide
        </Typography>
        <Box>
          <Typography
            // variant="h3"
            component={"h3"}
            fontWeight="600"
            width="400px"
            lineHeight={1.2}
            sx={{
              fontSize: {
                sm: "2rem",
                md: "3rem",
              },
            }}
          >
            Calculating BMI is easier{" "}
          </Typography>
          <img
            alt="heart beat"
            src={HeartSvg}
            style={{
              width: "40px",
              position: "relative",
              top: "8px",
              left: "16px",
            }}
          />
        </Box>
        <Typography
          variant="body1"
          component="p"
          fontWeight="500"
          fontFamily="Poppins"
          width="282px"
          color="rgba(138, 133, 133, 1)"
          marginTop="30px"
        >
          We calculate your BMI index from data like age, height, weight.
        </Typography>
      </Box>
      <Box sx={{ marginTop: "20px", marginLeft: { md: "0", "md.up": "20px" } }}>
        <img alt="diet food icon" width="80px" src="/fitness/diet1.png" />
        <Typography variant="h6" component="h4">
          Food Recomendation
        </Typography>
        <BodyTypographyStyled>
          We provide food recomendation according to your calorie requirements.
        </BodyTypographyStyled>
      </Box>
      <Box sx={{ marginTop: "80px", marginLeft: "20px" }}>
        <img alt="chatbot icon" width="80px" src="/fitness/chatbot.png" />
        <Typography variant="h6" component="h4">
          Interactive Chatbot
        </Typography>
        <BodyTypographyStyled>
          Solve your queries by interacting with our bot.
        </BodyTypographyStyled>
      </Box>
      <Box sx={{ marginTop: "20px", marginLeft: "20px" }}>
        <img width="80px" alt="Nutrition value" src="/fitness/stats.png" />
        <Typography variant="h6" component="h4">
          Nutrition Value
        </Typography>
        <BodyTypographyStyled>
          Get all the nutritional values of your preferred dish.
        </BodyTypographyStyled>
      </Box>
    </Stack>
  );
};

const Block3 = () => {
  const ImageContainer = ({ image_name }) => {
    return (
      <Stack sx={{ minWidth: "200px" }}>
        <Box
          width="100%"
          height="270px"
          sx={{
            borderRadius: "24px",
            background: `url(/fitness/${image_name}.jpeg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Typography fontWeight="500" marginY="10px">
          Product Name
        </Typography>
        <Typography
          variant="caption"
          fontWeight="normal"
          color="#8A8585"
          textOverflow="wrap"
        >
          Lorem ipsum dolor sit amet,
        </Typography>
      </Stack>
    );
  };
  const images = [
    [
      "food1",
      "food2",
      "food3",
      "food4",
      "food5",
      "food6",
      "food7",
      "food5",
      "food6",
      "food7",
    ],
    ["food21", "food22", "food23", "food24", "food25", "food26", "food27"],
  ];
  return (
    <Box sx={{ padding: "0px 60px", boxSizing: "border-box", marginY: 8 }}>
      <Typography
        variant="h5"
        component="h2"
        color="#1678F2"
        textTransform="uppercase"
        fontWeight="700"
        marginBottom={2}
        letterSpacing="8px"
      >
        help topics
      </Typography>
      <Typography variant="h3" component="h3" fontWeight="500" marginBottom={2}>
        Enhance Your Lifestyle
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "800px",
        }}
      >
        {images.map((row_images, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              width: `${window.screen.width - 100}px`,
              gap: 2,
              overflowX: "scroll",
              paddingY: 4,
            }}
          >
            {row_images.map((image, i) => (
              <ImageContainer key={image + i} image_name={image} />
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const FitnessHome = () => {
  useEffect(() => {
    document.title = "Health And Fitness";
  });

  const { theme } = useOutletContext();
  useEffect(() => console.log(theme));

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          position: "relative",
          background: "rgba(243, 243, 253, 1)",
        }}
      >
        <TopBar />
        <Block1 />
        <Block2 />
        <Block3 />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default FitnessHome;
