import { React, useState } from "react";
import { Paper, TextField } from "@material-ui/core";

function SearchBar({ onSubmit }) {
  const [searchItem, setsearchItem] = useState("");
  const handleChange = (event) => setsearchItem(event.target.value);
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchItem);
    }
  };

  return (
    <Paper
      elevation={2}
      style={{ padding: "15px", marginTop: "5vh", marginBottom: "-5vh" }}
    >
      <TextField
        fullWidth
        label="Search..."
        value={searchItem}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
    </Paper>
  );
}

export default SearchBar;
