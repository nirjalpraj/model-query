import styled from "@emotion/styled";
import {
  Button,
  Grid,
  Input,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Upload = () => {
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
          <Grid item xs={12}>
            <Typography variant="h5" fontWeight={550} color={"#135A70"}>
              Upload a file
            </Typography>
          </Grid>
          <Grid container spacing={4} item xs={12}>
            <Grid item xs={5}>
              <Input type="file" fullWidth />
            </Grid>
            <Grid item xs={3}>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#135A70" }}
                >
                  Browse
                  <VisuallyHiddenInput type="file" />
                </Button>
                <Button variant="contained" color="success">
                  Upload
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Upload;
