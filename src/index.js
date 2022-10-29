import { createTheme, ThemeProvider } from "@mui/material";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import "./styles/colors.css";

import FitnessApp from "./fitness_app/app";
import FitnessHome from "./fitness_app/pages/fitnessHome";
const FitnessDashBoard = lazy(() => import("./fitness_app/pages/dashboard"));
const LearningApp = lazy(() => import("./learning_app/learning_app"));
const NotFound = lazy(() => import("./pages/404"));
const ContactUs = lazy(() => import("./pages/contact_us"));
const HomePage = lazy(() => import("./pages/homepage"));
const About = lazy(() => import("./pages/about"));

export const themes = createTheme({
  palette: {
    transparent: { main: "rgba(0, 0, 0, 0.2)" },
    primary: { main: "#fff" },
    secondary: { main: "#fff" },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={themes}>
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
            </Route>
            <Route path="/fitness" element={<FitnessApp />}>
              <Route index element={<FitnessHome />} />
              <Route path="dashboard" element={<FitnessDashBoard />} />
              <Route path="about" element={<Navigate to="/about" replace />} />
            </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
