import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

function SearchBar({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handelChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  };

  return (
    <div>
      <Paper>
        <TextField
          label="Search..."
          value={searchTerm}
          onChange={handelChange}
          onKeyPress={onKeyPress}
        ></TextField>
      </Paper>
    </div>
  );
}

export default SearchBar;
