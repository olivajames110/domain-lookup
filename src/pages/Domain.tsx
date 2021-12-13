import { Delete, Search } from "@mui/icons-material";
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
import DomainCardItem from "src/components/DomainCardItem";
import RecentDomainItem from "src/components/RecentDomainItem";
import DomainCardItemSection from "src/components/DomainCardItemSection";
import DomainSearchSection from "src/components/DomainSearchSection";

export const Domain: NextPage = () => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [domainSearchName, setDomainSearchName] = useState("");
  const [domainSearchTopLevelDomain, setDomainSearchTopLevelDomain] =
    useState("");
  const [activeDomainName, setActiveDomainName] = useState("examplename.com");
  const [recentDomains, setRecentDomains] = useState([
    "example1",
    "example2",
    "example3",
    "example4",
    "example5",
  ]);

  const topLevelDomainHandler = (e) => {
    const topLevelDomain = e.target.value;
    setDomainSearchTopLevelDomain(topLevelDomain);
  };

  const domainSubmitHandler = () => {
    setDomainSearchName("");
    setDomainSearchName("");
    const combinedDomain = `${domainSearchName}.${domainSearchTopLevelDomain}`;
    setActiveDomainName(combinedDomain);
  };

  const selectedDomainSearchName = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        margin: "30px auto",
        justifyContent: "center",
        fontSize: "22px",
      }}
    >
      <span>Domain Name:</span>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          padding: "10px 18px",
          fontWeight: "bold",
          marginLeft: "15px",
        }}
      >
        {activeDomainName}
      </Box>
    </Box>
  );

  const DUMMYDATA_WHOIS = [
    {
      title: "Domain",
      rows: [
        {
          title: "Registrar Company:",
          value: "GoDaddy",
        },
        {
          title: "Name Servers:",
          value: "Example Server1",
        },
        {
          title: "Admin Email:",
          value: "email@email.com",
        },
      ],
    },
    {
      title: "Domain",
      rows: [
        {
          title: "Registrar Company:",
          value: "GoDaddy",
        },
        {
          title: "Name Servers:",
          value: "Example Server1",
        },
        {
          title: "Admin Email:",
          value: "email@email.com",
        },
      ],
    },
  ];

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

      <DomainSearchSection
        onChange={(e) => setDomainSearchName(e.target.value)}
        domainSearchName={domainSearchName}
        topLevelDomainHandler={topLevelDomainHandler}
        domainSubmitHandler={domainSubmitHandler}
      />

      <Box maxWidth={"1500px"} margin={"0 auto"} padding={"0 20px"}>
        <Grid container>
          {/* Main Body Col   */}
          <Grid sx={{ maxWidth: "1080px", margin: "0 auto" }} item xs={9}>
            {selectedDomainSearchName}

            <Grid spacing={3} container>
              <Grid item xs={4}>
                <DomainCardItem
                  title="Summary"
                  data={DUMMYDATA_WHOIS}
                  icon={<Search />}
                />
              </Grid>
              <Grid item xs={4}>
                <DomainCardItem
                  title="WHOIS"
                  data={DUMMYDATA_WHOIS}
                  icon={<Search />}
                />
              </Grid>
              <Grid item xs={4}>
                <DomainCardItem
                  title="DNS"
                  data={DUMMYDATA_WHOIS}
                  icon={<Search />}
                />
              </Grid>
            </Grid>
            <DomainCardItem
              title="Summary"
              data={DUMMYDATA_WHOIS}
              icon={<Search />}
            />
          </Grid>

          {/* Recent Search Col  */}
          <Grid
            sx={{ maxWidth: "320px", margin: "0 auto", padding: "15px 25px" }}
            item
            xs={3}
          >
            <h3>Recent Searches</h3>
            {recentDomains.map((d) => (
              <RecentDomainItem domain={d} />
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Domain;
