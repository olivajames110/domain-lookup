import {
  Alert,
  Button,
  Card,
  CardContent,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { GetServerSideProps, NextPage } from "next";
import React, { useState } from "react";
import { whois, RegistrationData } from "src/services/whois";

export const Domain: NextPage = () => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [domain, setDomain] = useState<string>("");

  const [whoisResult, setWhoisResult] = useState<RegistrationData>({});

  const changeDomain = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDomain(event.target.value);
  };

  const submitDomain = async () => {
    console.log("submitted");
    setWhoisResult(await whois(domain));
  };

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

      <TextField label="Domain Name" value={domain} onChange={changeDomain} />
      <Button variant="contained" onClick={submitDomain}>
        Submit
      </Button>

      <code>{JSON.stringify(whoisResult)}</code>

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
