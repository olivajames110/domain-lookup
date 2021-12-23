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
import React, { FunctionComponent, useEffect, useState } from "react";
import DomainCardItem from "src/components/DomainCardItem";
import RecentDomainItem from "src/components/RecentDomainItem";
import DomainCardItemSection from "src/components/DomainCardItemSection";
import DomainSearchSection from "src/components/DomainSearchSection";

import { whois } from "src/services/whois";

import { getDomainIP, getDomainMX, getDomainNS } from "src/services/domain";
import { clearButtonStyles } from "styles/domainPage";

interface Props {
  isLoading: boolean;
  activeDomainName: string;
  activeDomainData:
    | {
        whoIs: any;
        ip: any;
        mx: any;
        ns: any;
      }
    | undefined;
  title?: string;
  domainSearchName?: string;
  domainSearchTopLevelDomain?: string;
  onChange?: () => null;
  domainSubmitHandler?: () => null;
  topLevelDomainHandler?: () => null;
}

const DomainDataSection: FunctionComponent<Props> = (props) => {
  const [summaryCardData, setSummaryCardData] = useState({});
  const [whoisCardData, setWhoisCardData] = useState({});
  const [dnsCardData, setDNSCardData] = useState({});
  const [allCardData, setAllCardData] = useState([]);

  const splitIntoArray = (string: string) => {
    const array = string.split(" ");
    const newArray = array.map((i) => Object.create({ value: i }));
    console.log(newArray);
    return newArray;
  };

  const parseDate = (date: string) => {
    let milliseconds = Date.parse(date);
    const dateObject = new Date(milliseconds);
    const month = dateObject.toLocaleString("en-US", { month: "long" });
    const day = dateObject.toLocaleString("en-US", { day: "numeric" });
    const year = dateObject.toLocaleString("en-US", { year: "numeric" });
    let parsedDate = `${month} ${day}, ${year}`;
    return parsedDate;
  };

  const checkIfValid = (data: any) => {
    return data ? data : "empty";
  };

  const updateDataCards = () => {
    const getMXrecords = () => {
      let stringOfMxRecords = "";
      props.activeDomainData.mx.answerResourceRecords.map(
        (i) => (stringOfMxRecords += `${i.exchangeName.text} `)
      );
      console.log("stringOfMxRecords", stringOfMxRecords);
      return stringOfMxRecords;
    };

    const i = props.activeDomainData.ip;
    const n = props.activeDomainData.ns;
    const m = props.activeDomainData.mx;
    const w = props.activeDomainData.whoIs;
    const registrarName = checkIfValid(w.registrar);
    const nameServers = checkIfValid(splitIntoArray(w.nameServer));
    const adminEmail = checkIfValid(w.registrantEmail);
    const aRecord = checkIfValid(i.answerResourceRecords[0].ipAddress);
    const createdDate = checkIfValid(parseDate(w.creationDate));
    const expirationDate = checkIfValid(
      parseDate(w.registrarRegistrationExpirationDate)
    );
    const mxRecords = checkIfValid(splitIntoArray(getMXrecords()));
    const emailProvider = "WIP";
    const cName = "WIP";

    const summaryData = {
      whois: [
        {
          title: "Registrar Company",
          value: registrarName,
        },
        {
          title: "Admin Email",
          value: adminEmail,
        },
      ],
      dns: [
        {
          title: "Email Provider",
          value: emailProvider,
        },
        {
          title: "A-Record",
          value: aRecord,
        },
        {
          title: "C Name",
          value: cName,
        },
      ],
    };

    const whoIsData = {
      registrarInfo: [
        {
          title: "Name",
          value: registrarName,
        },
        {
          title: "Created Date",
          value: createdDate,
        },
        {
          title: "Expiration Date",
          value: expirationDate,
        },
      ],
      nameServers: nameServers,
    };
    const dnsData = {
      aRecord: [
        {
          value: aRecord,
        },
      ],
      cName: [
        {
          value: cName,
        },
      ],
      mxRecord: mxRecords,
    };
    const allData = [
      {
        title: "Registrar Company",
        value: "result.mx.reportingNameServer",
      },
      {
        title: "Name Servers",
        value: "Example Server1",
      },
      {
        title: "Admin Email",
        value: "email@email.com",
      },
    ];
    setSummaryCardData(summaryData);
    setWhoisCardData(whoIsData);
    setDNSCardData(dnsData);
    setAllCardData(allData);
  };
  useEffect(() => {
    console.log(
      "update with new domain data",
      JSON.stringify(props.activeDomainData)
    );
    if (props.activeDomainData !== undefined) {
      updateDataCards();
    }
  }, [props.activeDomainData]);

  return (
    <>
      <Grid spacing={3} container>
        <Grid item xs={4}>
          <DomainCardItem
            href={`https://${props.activeDomainName}`}
            activeDomainName={props.activeDomainName}
            title="SUMMARY"
            isLoading={props.isLoading}
            icon={<Assignment />}
          >
            <DomainCardItemSection
              key={Math.random()}
              title={"WHOIS"}
              rows={summaryCardData.whois}
            />
            <DomainCardItemSection
              key={Math.random()}
              title={"DNS"}
              rows={summaryCardData.dns}
            />
          </DomainCardItem>
        </Grid>
        <Grid item xs={4}>
          <DomainCardItem
            href={`https://who.is/whois/${props.activeDomainName}`}
            activeDomainName={props.activeDomainName}
            title="WHOIS"
            isLoading={props.isLoading}
            icon={<AccountBox />}
          >
            <DomainCardItemSection
              key={Math.random()}
              title={"Registrar Info"}
              rows={whoisCardData.registrarInfo}
            />
            <DomainCardItemSection
              key={Math.random()}
              title={"Name Servers"}
              rows={whoisCardData.nameServers}
            />
          </DomainCardItem>
        </Grid>
        <Grid item xs={4}>
          <DomainCardItem
            activeDomainName={props.activeDomainName}
            href={`https://mxtoolbox.com/SuperTool.aspx?action=https%3a%2f%2f${props.activeDomainName}%2f&run=toolpage`}
            title="DNS"
            isLoading={props.isLoading}
            icon={<Storage />}
          >
            <DomainCardItemSection
              key={Math.random()}
              title={"A-Record"}
              rows={dnsCardData.aRecord}
            />
            <DomainCardItemSection
              key={Math.random()}
              title={"C-Name"}
              rows={dnsCardData.cName}
            />
            <DomainCardItemSection
              key={Math.random()}
              title={"MX Records"}
              rows={dnsCardData.mxRecord}
            />
          </DomainCardItem>
        </Grid>
      </Grid>
      <DomainCardItem
        activeDomainName={props.activeDomainName}
        title="All"
        isLoading={props.isLoading}
        icon={<Storage />}
      >
        <DomainCardItemSection
          key={Math.random()}
          title={"A-Record"}
          rows={allCardData}
        />
      </DomainCardItem>
    </>
  );
};

export default DomainDataSection;
