import { createTheme, ThemeProvider } from "@mui/material";
import React, {
  createContext,
  lazy,
  Suspense,
  useEffect,
  useState,
} from "react";
import FitnessApp from "./fitness_app/app";
import FitnessHome from "./fitness_app/pages/fitnessHome";
import ThemeContext from "./themeProvider";

import "./index.css";
import "./styles/colors.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const FitnessDashBoard = lazy(() => import("./fitness_app/pages/dashboard"));
const LearningApp = lazy(() => import("./learning_app/learning_app"));
const NotFound = lazy(() => import("./pages/404"));
const ContactUs = lazy(() => import("./pages/contact_us"));
const HomePage = lazy(() => import("./pages/homepage"));
const About = lazy(() => import("./pages/about"));

const AppData = () => {
  const themeLight = createTheme({
    palette: {
      mode: "light",
      text: {
        primary: "#000",
      },
      transparent: { main: "rgba(0, 0, 0, 0.2)" },
      primary: { main: "#fff" },
      secondary: { main: "#fff" },
    },

    typography: {
      fontFamily: "Poppins",
    },
    breakpoints: {
      values: {
        xs: 0,
        sm3: 475,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  const themeDark = createTheme({
    palette: {
      mode: "dark",
      text: {
        primary: "#000",
      },
      transparent: { main: "rgba(0, 0, 0, 0.2)" },
      primary: { main: "#fff" },
      secondary: { main: "#fff" },
    },

    typography: {
      fontFamily: "Poppins",
    },
    breakpoints: {
      values: {
        xs: 0,
        sm3: 475,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  const [theme, setTheme] = useState(themeLight);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const themeMode = event.matches ? "dark" : "light";
        if (themeMode === "light") setTheme(themeLight);
        else if (themeMode === "dark") setTheme(themeDark);
      });
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ThemeContext.Provider value={{ setTheme }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route element={<HomePage />}>
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/about" element={<About />} />
              </Route>
              <Route path="/edu">
                <Route index element={<LearningApp />} />
                <Route path="dashboard" element={<FitnessDashBoard />} />
                <Route
                  path="about"
                  element={<Navigate to="/about" replace />}
                />
              </Route>
              <Route path="/fitness" element={<FitnessApp />}>
                <Route index element={<FitnessHome />} />
                <Route path="dashboard" element={<FitnessDashBoard />} />
                <Route
                  path="about"
                  element={<Navigate to="/about" replace />}
                />
              </Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </Suspense>
        </ThemeContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppData;
