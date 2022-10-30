import {
  Box,
  Card,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect } from "react";

/**
 *
 * @param {{ person: {name: string, image: string, details: {contributions: string[]}}}} person
 * @returns
 */
const PersonCard = ({ person, image }) => {
  const { name } = person;

  const RenderDetails = () => {
    const elementsArray = [];

    for (const key in person.details) {
      elementsArray.push(
        <Typography
          fontWeight={"bold"}
          textTransform="capitalize"
          component="h3"
          marginTop="12px"
        >
          {key}:
        </Typography>
      );
      if (Object.hasOwnProperty.call(person.details, key)) {
        const element = person.details[key];
        if (Array.isArray(element)) {
          elementsArray.push(
            <List>
              {element.map((ele) => (
                <ListItem key={ele}>
                  <ListItemText>{ele === "" ? "" : `- ${ele}`}</ListItemText>
                </ListItem>
              ))}
            </List>
          );
        }
      }
    }
    return elementsArray;
  };

  return (
    <>
      <Card sx={{ width: "300px" }}>
        <Stack sx={{ padding: "12px 8px" }}>
          <Box sx={{ height: "300px", overflow: "hidden", marginBottom: 2 }}>
            {image}
          </Box>
          <Box sx={{ paddingX: "12px" }}>
            <Typography variant="h6" fontWeight="bold" fontFamily="Poppins">
              {name}
            </Typography>
            <Typography>
              <span>Student: </span>B.Tech (CSE)
            </Typography>
            {RenderDetails().map((element, index) => (
              <React.Fragment key={index}>{element}</React.Fragment>
            ))}
          </Box>
        </Stack>
      </Card>
    </>
  );
};

const About = () => {
  useEffect(() => {
    document.title = "About | Admin Dashboard Crawler";
  });

  const personInfos = [
    {
      name: "Aarti Patidar",
      image_url: "/about/aarti_patidar_1.jpeg",
      offset: "0 -32px",
      details: {
        contributions: [
          "Real Time Chat App",
          "Real Time Video/Voice",
          "Inspiring Quotes for site",
        ],
      },
    },
    {
      name: "Dheeraj Yadav",
      image_url: "/about/dheeraj_yadav_1.jpeg",
      details: {
        contributions: [
          "Dashboard Desgin",
          "Search Engine",
          "Real State Webapp",
        ],
      },
    },
    {
      name: "Jayti Gokharu",
      image_url: "/about/jayti_gokharu_1.jpeg",
      offset: "32px 32px",
      scale: "2",
      details: {
        contributions: ["News App", "Expense Tracker", "Personal Video App"],
      },
    },
    {
      name: "Anshu Mourya",
      image_url: "/about/anshu-mourya.jpg",
      details: {
        contributions: ["Fitness App", "Learning App", ""],
      },
      offset: "-16px 0px",
    },
  ];

  return (
    <>
      <Typography
        component={"h1"}
        fontSize={"32px"}
        fontWeight={"bold"}
        textAlign="center"
        marginTop={"24px"}
      >
        <span style={{ color: "#005eac" }}>INDORE </span>
        <span style={{ color: "#005eac" }}>INSTITUTE </span>
        <span style={{ color: "#fff" }}>OF </span>
        <span style={{ color: "#feb740" }}>SCIENCE </span>
        <span style={{ color: "#feb740" }}>TECHNOLOGY</span>
      </Typography>
      <Typography
        component={"h2"}
        fontSize={"32px"}
        fontWeight={"bold"}
        textAlign="center"
        color={"wheat"}
      >
        Students
      </Typography>
      <Stack
        display={"grid"}
        direction={"row"}
        sx={{
          maxWidth: "100%",
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "flex-start",
          marginTop: "24px",
          marginX: { sm: "20px", md: "40px" },
          gap: "24px",
          marginBottom: "100px",
          gridTemplateColumns: {
            xs: "auto",
            sm: "auto auto",
            md: "auto auto auto",
            lg: "auto auto auto auto",
          },
        }}
      >
        {personInfos
          .sort((person1, person2) => person1.name.localeCompare(person2.name))
          .map((person) => (
            <PersonCard
              key={person.name}
              person={person}
              image={
                <img
                  src={person.image_url}
                  width="100%"
                  alt={person.name}
                  style={{ translate: person.offset, scale: person.scale }}
                />
              }
            />
          ))}
      </Stack>
    </>
  );
};

export default About;
