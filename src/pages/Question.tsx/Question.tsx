import { TextFormat } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Question = () => {
  return (
    <div>
      <Stack>
        <Stack direction="row" gap={4} padding={5}>
          <img src="./genese.png" width={150} height={80} />
          <Typography
            variant="h4"
            paddingY={4}
            fontStyle={"italic"}
            fontWeight={550}
            color={"#135A70"}
          >
            DocGPT
          </Typography>
        </Stack>
        <Box
          sx={{
            height: "60vh",
            marginLeft: 5,
            marginRight: 2,
            overflowY: "scroll",
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} marginTop={5}>
              <Typography
                style={{
                  backgroundColor: "#135A70",
                  color: "white",
                  borderRadius: "5px",
                  padding: "8px",
                  width: "fit-content",
                }}
              >
                this is the query. But a little bit longer than before this will
                be needed for the query to work properly and will be fixed in
                the future when
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Grid container gap={4} alignItems={"center"} justifyContent={"center"}>
          <Grid item xs={9}>
            <TextField fullWidth label="Write your query..." />
          </Grid>
          <Grid item xs={2} justifySelf={"center"}>
            <Button variant="contained" sx={{ backgroundColor: "#135A70" }}>
              Send
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};

export default Question;
