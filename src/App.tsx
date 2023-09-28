import {
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useForm } from "react-hook-form";

import React from "react";
import { blue, red } from "@mui/material/colors";

function App() {
  const { register } = useForm();
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh", paddingX: "10vw" }}
      >
        <Grid item container spacing={2}>
          <Grid container spacing={5} item xs={12}>
            <Grid item>
              <img src="./genese.png" width={200} />
            </Grid>
            <Grid item>
              <Typography
                variant="h3"
                paddingY={4}
                fontStyle={"italic"}
                fontWeight={550}
                color={"#135A70"}
              >
                DocGPT
              </Typography>
            </Grid>
          </Grid>
          {/* <Grid item xs={12}>
            <Typography variant="h5">Write your query...</Typography>
          </Grid> */}
          <Grid container item xs={12}>
            <Grid item xs={9}>
              <TextField
                multiline
                rows={10}
                label="What's in your mind?"
                fullWidth
              />
            </Grid>
            <Grid
              container
              direction="column"
              spacing={10}
              item
              xs={3}
              alignItems="center"
            >
              <Grid item>
                <Stack spacing={1}>
                  <span>Select Model</span>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    style={{ minWidth: 250 }}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </Stack>
              </Grid>
              <Grid item>
                <Button type="submit" variant="outlined">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
