import { Box } from "@mui/system";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  AdminDashBoardDrawer,
  AdminDashBoardTopAppBar,
} from "../components/AdminDashBoardTopAppBar";
import BlurDesign from "../components/BlurDesign";

const HomePage = () => {
  const [drawerOpenState, setDrawerOpenState] = useState(false);

  return (
    <>
      <AdminDashBoardDrawer
        drawerOpenState={drawerOpenState}
        setDrawerOpenState={setDrawerOpenState}
      />
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          background: "#14162E",
          // position: "fixed",
          overflow: "scroll",
        }}
      >
        <AdminDashBoardTopAppBar
          drawerOpenState={drawerOpenState}
          setDrawerOpenState={setDrawerOpenState}
        />
        <BlurDesign />
        <Outlet />
      </Box>
    </>
  );
};
export default HomePage;
