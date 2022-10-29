import { Search } from "@mui/icons-material";
import React, { useState } from "react";

const SearchBoxLearningApp = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="box">
      <form name="search">
        <input
          style={
            searchValue
              ? { width: "240px", background: "#3b3640", borderRadius: "10px" }
              : {}
          }
          type="text"
          className="input"
          name="search box"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Search className="search-icon" />
      </form>
    </div>
  );
};

export default SearchBoxLearningApp;
