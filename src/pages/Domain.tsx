import {
  Alert,
  Card,
  CardContent,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { NextPage } from "next";
import React, { useState } from "react";

export const Domain: NextPage = () => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  return (
    <Box padding={2}>
      <Snackbar
        open={isError}
        onClose={() => setIsError(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error">
          {`Request could not be completed: ${errorMessage}, Contact IT if you get this message`}
        </Alert>
      </Snackbar>

      <TextField label="Domain Name" />

      <Grid container>
        <Grid item xs={6}>
          <Card>
            <CardContent>wwww</CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>wwww</CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Domain;
