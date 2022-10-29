import React from "react";

const BlurDesign = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          width: "100px",
          height: "100px",
          top: "175px",
          left: "300px",
          boxShadow:
            "rgb(68 97 242 / 30%) 0px 0px 185px 120px, rgb(68 97 242 / 30%) 0px 0px 72px 42px inset",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          width: "100px",
          height: "100px",
          top: "375px",
          right: "300px",
          boxShadow:
            "rgb(68 97 242 / 30%) 0px 0px 185px 120px, rgb(68 97 242 / 30%) 0px 0px 72px 42px inset",
        }}
      ></div>
    </>
  );
};

export default BlurDesign;
