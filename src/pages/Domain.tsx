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

const DUMMYDATA_SUMMARY = [
  {
    title: "WHOIS",
    rows: [
      {
        title: "Registrar Company",
        value: "GoDaddy",
      },
      {
        title: "Name Servers",
        value: "Example Server1",
      },
      {
        title: "Admin Email",
        value: "email@email.com",
      },
    ],
  },
  {
    title: "DNS",
    rows: [
      {
        title: "Email Provider",
        value: "GoDaddy",
      },
      {
        title: "A-Record",
        value: "75.103.71.153",
      },
      {
        title: "C Name",
        value: "75.103.71.153",
      },
    ],
  },
];
const DUMMYDATA_WHOIS = [
  {
    title: "Registrar Info",
    rows: [
      {
        title: "Name",
        value: "GoDaddy.com, LLC",
      },
      {
        title: "Created",
        value: "Jan 30 2006",
      },
      {
        title: "Expires",
        value: "Jan 30 2022",
      },
    ],
  },

  {
    title: "Name Servers",
    rows: [
      {
        value: "ns1.domain.com",
      },
      {
        value: "ns2.domain.com",
      },
    ],
  },
];
const DUMMYDATA_DNS = [
  {
    title: "A-Record",
    rows: [
      {
        value: "75.103.71.153",
      },
    ],
  },
  {
    title: "C Name",
    rows: [
      {
        value: "75.103.71.153",
      },
    ],
  },
  {
    title: "MX Records",
    rows: [
      {
        value: "alt1.aspmx.l.google.com",
      },
      {
        value: "aspmx2.googlemail.com",
      },
      {
        value: "aspmx3.googlemail.com",
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

  const topLevelDomainHandler = (value) => {
    console.log("value", value);
    // console.log(e);
    // const topLevelDomain = e.target.value;
    setDomainSearchTopLevelDomain(value);
  };

  const domainSubmitHandler = () => {
    setDomainSearchName("");

    const combinedDomain = `${domainSearchName}.${domainSearchTopLevelDomain}`;

    //Post request with Domain name to server
    //Get Request with data object
    setActiveDomainName(combinedDomain);
    const recent = [combinedDomain, ...recentDomains];
    setRecentDomains(recent);
    setActiveDomainData(DUMMYDATA_SUMMARY);
  };

  const recentSearchHandler = (d) => {
    console.log("Recent Name");
    setActiveDomainName(d);

    const recent = [d, ...recentDomains];
    setRecentDomains(recent);

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
      domainSearchTopLevelDomain={domainSearchTopLevelDomain}
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
        width: "100%",
        margin: "0 auto",
        flexGrow: 1,
        flexShrink: 0,
      }}
    >
      {SelectedDomainSearchName}
      <Grid spacing={3} container>
        <Grid item xs={4}>
          <DomainCardItem
            href={`https://${activeDomainName}`}
            activeDomainName={activeDomainName}
            title="Summary"
            data={DUMMYDATA_SUMMARY}
            icon={<Assignment />}
          />
        </Grid>
        <Grid item xs={4}>
          <DomainCardItem
            href={`https://who.is/whois/${activeDomainName}`}
            activeDomainName={activeDomainName}
            title="WHOIS"
            data={DUMMYDATA_WHOIS}
            icon={<AccountBox />}
          />
        </Grid>
        <Grid item xs={4}>
          <DomainCardItem
            activeDomainName={activeDomainName}
            href={`https://mxtoolbox.com/SuperTool.aspx?action=https%3a%2f%2f${activeDomainName}%2f&run=toolpage`}
            title="DNS"
            data={DUMMYDATA_DNS}
            icon={<Storage />}
          />
        </Grid>
      </Grid>
      <DomainCardItem
        title="Summary"
        data={DUMMYDATA_SUMMARY}
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
          <Box sx={{ flexGrow: activeDomainName ? 1 : 0, flexShrink: 0 }}>
            {activeDomainName && ActiveWebsiteInformation}
          </Box>

          {/* Recent Col   */}
          <Box
            sx={{
              // width: "100%",
              // maxWidth: "320px",
              display: "flex",
              margin: "0 auto",
              padding: "15px 25px",
              transition: "300ms",
              flexGrow: activeDomainName ? 0 : 1,
              flexShrink: 1,
              flexBasis: "320px",
            }}
          >
            <Box sx={{ width: "100%", maxWidth: "824px", margin: "0 auto" }}>
              <h3>Recent Searches</h3>
              {recentDomains.slice(0, 10).map((d) => (
                <RecentDomainItem
                  onClick={recentSearchHandler}
                  key={Math.random()}
                  domain={d}
                  activeDomainName={activeDomainName}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Domain;
