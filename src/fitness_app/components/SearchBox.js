import { InsertPhotoOutlined, MicNone, Search } from "@mui/icons-material";
import { Box, Stack, styled, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/system";
import { useRef, useState } from "react";

const SearchBox = ({
  label,
  onClickPicture,
  onClickMic,
  onClickSearch,
  sx,
}) => {
  const [outlineState, setOutlineState] = useState(false);
  const inputRef = useRef();
  const iconTheme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
    },
  });

  const IconContainer = styled(Box)((theme) => ({
    width: "40px",
    height: "40px",
    display: "grid",
    placeItems: "center",
    borderRadius: "50%",
    background: "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%)",
    cursor: "pointer",
    transition: "0.2s",
    "&:hover": {
      boxShadow: "0 0 2px 5px #3a8ef63b",
    },
    "&:active": {
      transform: "scale(0.95)",
    },
  }));

  return (
    <ThemeProvider theme={iconTheme}>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          position: "relative",
          padding: "5px 21px",
          borderRadius: "40px",
          height: "60px",
          boxShadow: "inset 2px 2px 25px 5px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: "60px",
          background: "#fff",
          border: "1px solid rgba(0, 0, 0, 0.2)",
          outline: outlineState ? "3px solid var(--btn-color-one)" : "none",
          ...sx,
        }}
      >
        <input
          type="text"
          name="searchBox"
          placeholder={label}
          style={{
            background: "none",
            border: "none",
            width: "300px",
            height: "40px",
            fontFamily: "Poppins",
            fontSize: "0.9rem",
            outline: "none",
          }}
          onFocus={() => setOutlineState(true)}
          onBlur={() => setOutlineState(false)}
          ref={inputRef}
        />
        <IconContainer onClick={onClickPicture}>
          <InsertPhotoOutlined color="primary" />
        </IconContainer>
        <IconContainer onClick={onClickMic}>
          <MicNone color="primary" />
        </IconContainer>
        <IconContainer onClick={() => onClickSearch(inputRef.current)}>
          <Search color="primary" />
        </IconContainer>
      </Stack>
    </ThemeProvider>
  );
};

export default SearchBox;
