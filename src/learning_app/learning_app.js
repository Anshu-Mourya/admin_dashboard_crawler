import { Forward } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Component, createRef, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "../styles/colors.css";
import Container from "./components/Container";
import Topbar from "./components/LearningAppTopBar";
import "./learning_app.css";

function CardComponent({ course }) {
  const { title, content, imgUrl, dateTime } = course;
  return (
    <Card
      variant="outlined"
      color="white"
      style={{
        maxWidth: "400px",
        minHeight: 400,
        position: "relative",
        background: "linear-gradient(to right, #41295a, #2f0743)",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component={"h1"}
          // textTransform="uppercase"
          marginBottom={"24px"}
          fontWeight="600"
          color="white"
        >
          {title}
        </Typography>
        <Box width={"100%"}>
          <img src={imgUrl} alt={title} style={{ width: "100%" }} />
        </Box>
        <Typography
          variant="body"
          component={"p"}
          color="white"
          marginTop="18px"
        >
          {content}
        </Typography>
        <Box
          width="100%"
          sx={{
            position: "relative",
            bottom: 0,
            marginTop: "20px",
            display: "inline-flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="caption" component={"span"} color="white">
            {new Date(dateTime).toLocaleDateString()}
          </Typography>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            Read More <Forward />{" "}
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
}

function LandingPage() {
  useEffect(() => {
    document.title = "Learning App";
  });
  const courses = [
    {
      title: "Physics",
      content:
        "Physics is essentially an intuitive and concrete science. Mathematics is only a means for expressing the laws that govern phenomena.",
      imgUrl:
        "https://media.istockphoto.com/photos/atom-picture-id508139163?k=20&m=508139163&s=612x612&w=0&h=DpIgm1d2axYIzOkIkEr_zL3ELHwflL36d9tD2vGU89g=",
      dateTime: "10/12/2021",
    },
    {
      title: "Chemistry",
      content:
        "Chemistry is good when you make love with it. Chemistry is bad when you make crack with it.",
      imgUrl:
        "https://media.istockphoto.com/photos/chemical-tube-with-reaction-formula-picture-id655439586?k=20&m=655439586&s=612x612&w=0&h=59QaQrKBGyPdoy8r7nQ3mAsRC5zixbc1HOdQwMC66jo=",
      dateTime: "08/23/2020",
    },
    {
      title: "Mathematics",
      content:
        "Mathematics is the only place where truth and beauty means the same thing.",
      imgUrl:
        "https://media.istockphoto.com/vectors/mathematics-vector-id1044168372?k=20&m=1044168372&s=612x612&w=0&h=H1O1Q0kaszNSHW620rqy42V52I5K4kSduPXI6O16-vA=",
      dateTime: "04/27/2021",
    },
    {
      title: "Astronomy",
      content:
        "Astronomy is the study of everything in the universe beyond Earth's atmosphere. That includes objects we can see with our naked eyes, like the Sun , the Moon , the planets, and the stars.",
      imgUrl:
        "https://skyandtelescope.org/wp-content/uploads/Solar-system-NASA_S-630x338.jpg",
      dateTime: "05/03/2022",
    },
  ];

  return (
    <>
      <Container>
        <Box
          sx={{
            position: "relative",
            maxWidth: "calc(100% - 100px)",
            top: "100px",
            left: "20px",
            zIndex: "1",
          }}
        >
          <Typography variant="h3" fontWeight={"bold"}>
            To Learn is best
          </Typography>
          <Typography
            maxWidth="100%"
            height="200px"
            sx={{ wordBreak: "keep-all" }}
          >
            The capacity to learn is a gift. The ability to learn is a skill.
            The willingliness to learn is a choice.
          </Typography>
        </Box>
        <Box width={{ xs: "1000px" }} className="illustration_container">
          <img src="/learning/illustration_learn.png" alt="illustration" />
        </Box>
      </Container>
      <main>
        <Box
          sx={{
            width: "100%",
            padding: "20px",
            borderTop: "1px solid rgba( 255, 255, 255, 0.18 )",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            margin="60px 0"
            fontWeight="700"
            textAlign={"center"}
          >
            Courses
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "inline-flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {courses.map((course) => (
              <CardComponent course={course} key={course.title} />
            ))}
          </Box>
        </Box>
      </main>
      {/* <Footer /> */}
    </>
  );
}

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
});

const LearningApp = () => {
  const ref = useRef();
  return (
    <ThemeProvider theme={theme}>
      <div className="learning_app" ref={ref}>
        <Topbar />
        <LandingPage />
      </div>
    </ThemeProvider>
  );
};

export default LearningApp;
