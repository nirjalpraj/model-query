import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Question = () => {
  return (
    <div>
      <Stack>
        <Stack direction="row" gap={4} padding={10}>
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
        <Box sx={{ width: "100vw" }}></Box>
      </Stack>
    </div>
  );
};

export default Question;
