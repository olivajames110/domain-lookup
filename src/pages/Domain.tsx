import {
  AccountBox,
  Assignment,
  Clear,
  Delete,
  Person,
  Search,
  Storage,
} from "@mui/icons-material";
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

const clearButtonStyles = css`
    position: absolute;
    top: -5px;
    right: -5px;
    display: flex;
    align-items: center;
    justify-content: content;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 13px;
    width: 24px;
    height: 24px;
    font-size: 12px;
    text-decoration: underline;
    background:#ffffff;
    border-radius: 50px;
    padding: 0;
    svg {
      display: block;
      height: 14px
    }
   ,
`;

const DUMMYDATA_SEARCH = [
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
const DUMMYDATA_RECENT = [
  {
    title: "Domain",
    rows: [
      {
        title: "Registrar Company:",
        value: "Recent",
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
        value: "Recent",
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

export const Domain: NextPage = () => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [domainSearchName, setDomainSearchName] = useState("");
  const [domainSearchTopLevelDomain, setDomainSearchTopLevelDomain] =
    useState("com");
  const [activeDomainName, setActiveDomainName] = useState("");
  const [activeDomainData, setActiveDomainData] = useState([]);
  const [recentDomains, setRecentDomains] = useState([
    "example1.com",
    "example2.com",
    "example3.com",
    "example4.com",
    "example5.com",
  ]);

  const topLevelDomainHandler = (e) => {
    const topLevelDomain = e.target.value;
    setDomainSearchTopLevelDomain(topLevelDomain);
  };

  const domainSubmitHandler = () => {
    setDomainSearchName("");

    const combinedDomain = `${domainSearchName}.${domainSearchTopLevelDomain}`;

    //Post request with Domain name to server
    //Get Request with data object
    setActiveDomainName(combinedDomain);
    setActiveDomainData(DUMMYDATA_SEARCH);
  };

  const recentSearchHandler = (d) => {
    console.log("Recent Name");
    setActiveDomainName(d);
    setActiveDomainData(DUMMYDATA_RECENT);
  };

  const clearFormHandler = () => {
    setDomainSearchName("");

    setActiveDomainName("");
  };

  // Start Page Layout components

  const SearchSection = (
    <DomainSearchSection
      onChange={(e) => setDomainSearchName(e.target.value)}
      domainSearchName={domainSearchName}
      topLevelDomainHandler={topLevelDomainHandler}
      domainSubmitHandler={domainSubmitHandler}
    />
  );

  const SelectedDomainSearchName = (
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
        }}
      >
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
        <button onClick={clearFormHandler} className={clearButtonStyles}>
          <Clear />
        </button>
      </Box>
    </Box>
  );

  const ActiveWebsiteInformation = (
    <Box
      sx={{
        maxWidth: "1080px",
        margin: "0 auto",
        flexGrow: "1",
        flexShrink: "0",
      }}
    >
      {SelectedDomainSearchName}
      <Grid spacing={3} container>
        <Grid item xs={4}>
          <DomainCardItem
            title="Summary"
            data={activeDomainData}
            icon={<Assignment />}
          />
        </Grid>
        <Grid item xs={4}>
          <DomainCardItem
            title="WHOIS"
            data={activeDomainData}
            icon={<AccountBox />}
          />
        </Grid>
        <Grid item xs={4}>
          <DomainCardItem
            title="DNS"
            data={activeDomainData}
            icon={<Storage />}
          />
        </Grid>
      </Grid>
      <DomainCardItem
        title="Summary"
        data={DUMMYDATA_SEARCH}
        icon={<Search />}
      />
    </Box>
  );

  //End Page Layout components
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
      {SearchSection}
      <Box maxWidth={"1500px"} margin={"0 auto"} padding={"0 20px"}>
        <Box sx={{ display: "flex", transition: "300ms" }}>
          {/* Main Body Col   */}

          {activeDomainName && ActiveWebsiteInformation}

          {/* Recent Col   */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "320px",
              margin: "0 auto",
              padding: "15px 25px",
              transition: "300ms",
            }}
          >
            <h3>Recent Searches</h3>
            {recentDomains.map((d) => (
              <RecentDomainItem onClick={recentSearchHandler} domain={d} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Domain;
