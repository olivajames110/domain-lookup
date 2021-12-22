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

import { whois } from "src/services/whois";

import { getDomainIP, getDomainMX, getDomainNS } from "src/services/domain";
import { clearButtonStyles } from "styles/domainPage";
import DomainDataSection from "src/components/DomainDataSection";

export const Home: NextPage = () => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [domainSearchName, setDomainSearchName] = useState("");
  const [domainSearchTopLevelDomain, setDomainSearchTopLevelDomain] =
    useState("com");

  const [activeDomainName, setActiveDomainName] = useState("");
  const [activeDomainData, setActiveDomainData] = useState<{
    whoIs: any;
    ip: any;
    mx: any;
    ns: any;
  }>();

  const [recentDomains, setRecentDomains] = useState([
    "example1.com",
    "example2.com",
    "example3.com",
    "example4.com",
    "example5.com",
  ]);

  const loadDomainData = async (domainName: string) => {
    const [ip, mx, ns] = await Promise.all([
      await getDomainIP(domainName),
      await getDomainMX(domainName),
      await getDomainNS(domainName),
    ]);

    return { ip, mx, ns };
  };

  const domainSubmitHandler = async () => {
    const combinedDomain = `${domainSearchName}.${domainSearchTopLevelDomain}`;
    setDomainSearchName("");

    setActiveDomainName(combinedDomain);
    const recent = [combinedDomain, ...recentDomains];
    setRecentDomains(recent);
    setIsLoading(true);
    try {
      const dnsResult = await loadDomainData(combinedDomain);
      const whoisResult = await whois(combinedDomain);

      // quick fix for string parse
      const whoIs = JSON.parse(whoisResult as string);
      const combinedResult = { ...dnsResult, whoIs };

      setActiveDomainData(combinedResult);
      setIsLoading(false);
    } catch (err) {
      console.log("There was an error", err);
    }
  };

  const recentSearchHandler = (domain: string) => {
    console.log("Recent Name");
    setActiveDomainName(domain);
    const recent = [domain, ...recentDomains];
    setRecentDomains(recent);
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
      <DomainDataSection
        isLoading={isLoading}
        activeDomainName={activeDomainName}
        activeDomainData={activeDomainData}
      />
      {/* <code>{whoisResult ?? ""}</code> */}
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

export default Home;
