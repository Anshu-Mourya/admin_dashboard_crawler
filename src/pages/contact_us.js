import { ThemeProvider } from "@emotion/react";
import { Box, Button, createTheme, Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useId, useState } from "react";
import "../styles/form.css";

/**
 *
 * @param {{label: string, value: string, type: React.HTMLInputTypeAttribute }} param0
 * @returns
 */
const InputField = ({ label, value, onChange, type }) => {
  const id = useId();
  const [focus, setFocus] = useState(false);

  return (
    <div className={"input-container" + (focus ? " focus" : "")}>
      <label htmlFor={id} className={focus ? "focus" : ""}>
        {label}
      </label>
      <input
        id={id}
        value={value}
        type={type}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  );
};

const InputFieldTextArea = ({ label, value, onChange, type }) => {
  const id = useId();
  const [focus, setFocus] = useState(false);
  const [newHeight, setHeight] = useState("40px");

  useEffect(() => {
    console.log(newHeight);
  });

  return (
    <div
      className={"input-container" + (focus ? " focus" : "")}
      style={{
        height: newHeight,
      }}
    >
      <label htmlFor={id} className={focus ? "focus" : ""}>
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        type={type}
        onChange={onChange}
        onFocus={() => {
          setFocus(true);
          setHeight("250px");
        }}
        onBlur={() => {
          setFocus(false);
          setHeight("40px");
        }}
      />
    </div>
  );
};

const theme = createTheme({
  palette: {
    primary: { main: "#fff" },
    BtnColor: { main: "rgb(65, 53, 202)" },
  },
});

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us | Admin Dashboard Crawler";
    document.body.style.background = "#14162E";
    return () => {
      document.body.style.background = "#fff";
    };
  });

  return (
    <ThemeProvider theme={theme}>
      <Stack
        sx={{
          maxWidth: "400px",
          position: {
            md: "static",
          },
          top: "0",
          alignItems: "center",
          marginY: { xs: 2, md: 4 },
          paddingY: {
            xs: 8,
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
        <Typography variant="h5" component="h1" fontWeight="bold" color="#fff">
          Contact Us
        </Typography>

        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          sx={{
            width: "calc(100% - 20px)",
          }}
        >
          <Box sx={{ width: "100%", marginTop: "24px", color: "white" }}>
            <form
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <InputField label="Email: " type={"email"} />
              <InputFieldTextArea label="Describe Your Query: " type={"text"} />
              <Button
                variant="contained"
                color="BtnColor"
                sx={{
                  width: "calc(100% - 80px)",
                  marginTop: "24px",
                  transition: "0.2s",
                  "&:active": {
                    scale: "0.95",
                  },
                }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

export default ContactUs;
