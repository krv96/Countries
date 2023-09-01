import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Highlights() {
  const [region, setRegion] = React.useState("");
  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
      <InputLabel>Filter by Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={region}
          label="Region"
          onChange={handleChange}
        >
          <MenuItem value={1}>Africa</MenuItem>
          <MenuItem value={2}>America</MenuItem>
          <MenuItem value={3}>Asia</MenuItem>
          <MenuItem value={4}>Europe</MenuItem>
          <MenuItem value={5}>Oceania</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
