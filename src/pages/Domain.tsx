import { Search } from "@mui/icons-material";
import { css } from "@emotion/css";
import {
  Alert,
  Button,
  Card,
  CardContent,
  Grid,
  InputLabel,
  Snackbar,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";

import { NextPage } from "next";
import React, { useState } from "react";

const buttonStyle = css`
    width: 130px;
    height: 50px;
    border: none;
    padding: 12px 16px;
    border-radius: 0;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    background-color: #312F2F;
    color: #ffffff;
    font-size: 14px;
    /* transition: 140ms; */
    display: flex; 
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    svg {
      display: block;
    }
    &:hover: {
      background: #9d9b9b ;
    },
`;

const DomainCard = (props) => {
  return (
    <>
      <span>
        <Search />
      </span>
      <span>{props.title}</span>
      <Card>
        <CardContent>{props.children}</CardContent>
      </Card>
    </>
  );
};
export const Domain: NextPage = () => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [domainName, setDomainName] = useState("");

  const domainSearchHandler = (e) => {
    e.preventDefault();
    setDomainName(e.target.name);
  };

  return (
    <Box>
      <Snackbar
        open={isError}
        onClose={() => setIsError(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error">
          {`Request could not be completed: ${errorMessage}, Contact IT if you get this message`}
        </Alert>
      </Snackbar>

      {/* Search container  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "30px",
          background: "#ffffff",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "840px",
            margin: "0 auto",
            padding: "22px 0",
          }}
        >
          <InputLabel
            sx={{ fontWeight: "bold", marginBottom: "3px" }}
            htmlFor={"domain-search"}
          >
            Enter Your Domain
          </InputLabel>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              background: "#ffffff",
            }}
          >
            <input
              style={{
                width: "100%",
                height: "50px",
                border: "1px solid #AFAFAF",
                padding: "12px 16px",
                // borderRadius: "2px",
              }}
              value={domainName}
              onChange={domainSearchHandler}
              type="text"
              name="domain-search"
              id=""
            />
            <button className={buttonStyle}>
              <span>
                <Search fontSize="inherit" />
              </span>
              <span style={{ fontWeight: "bold" }}>Search</span>
            </button>
          </Box>
        </Box>
      </Box>
      {/* End Search container  */}

      <Box padding={2}>
        <Grid spacing={2} container>
          {/* Main Body Col   */}
          <Grid item xs={10}>
            <Grid
              sx={{ maxWidth: "1080px", margin: "0 auto" }}
              spacing={3}
              container
            >
              <Grid item xs={4}>
                <DomainCard title="Summary">Content</DomainCard>
              </Grid>
              <Grid item xs={4}>
                {" "}
                <DomainCard title="WHOIS">Content</DomainCard>
              </Grid>
              <Grid item xs={4}>
                {" "}
                <DomainCard title="DNS">Content</DomainCard>
              </Grid>
            </Grid>
          </Grid>

          {/* Recent Search Col  */}
          <Grid item xs={2}>
            <h3>Recent Searches</h3>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Domain;
