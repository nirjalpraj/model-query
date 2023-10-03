import React from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <Stack
        // direction={"row"}
        gap={4}
        sx={{ minHeight: "100vh" }}
        alignItems="center"
        justifyContent="center"
      >
        <Stack direction="row" gap={4}>
          <img src="./genese.png" width={200} />
          <Typography
            variant="h3"
            paddingY={4}
            fontStyle={"italic"}
            fontWeight={550}
            color={"#135A70"}
          >
            DocGPT
          </Typography>
        </Stack>
        <Stack direction="row" gap={4}>
          <Card sx={{ height: "30vh", width: "13vw" }} elevation={9}>
            <Stack alignItems="center" justifyContent="center">
              <FileUploadIcon
                sx={{ height: "20vh", width: "5vw", color: "#135A70" }}
              />
              <Button
                variant="contained"
                style={{ backgroundColor: "#135A70", width: "8vw" }}
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/upload"
                >
                  Upload
                </Link>
              </Button>
            </Stack>
          </Card>
          <Card sx={{ height: "30vh", width: "13vw" }} elevation={9}>
            <Stack alignItems="center" justifyContent="center">
              <QuestionMarkIcon
                sx={{ height: "20vh", width: "5vw", color: "#135A70" }}
              />
              <Button
                variant="contained"
                style={{ backgroundColor: "#135A70", width: "10vw" }}
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/question-answer"
                >
                  Ask Question
                </Link>
              </Button>
            </Stack>
          </Card>
        </Stack>
      </Stack>
    </div>
  );
};

export default Landing;
