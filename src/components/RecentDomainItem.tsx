import React, { FunctionComponent } from "react";
import { css } from "@emotion/css";
import { Delete, Search } from "@mui/icons-material";
import { Box } from "@mui/system";
import DomainCardItemSection from "./DomainCardItemSection";
import { Grid } from "@mui/material";

interface Props {
  domain: string;
  label?: string;
  activeDomainName?: string;
  onClick?: () => null;
}

const recentButtonStyle = css`
    display: flex;
    align-items: center;
    cursor: pointer;
    background: none;
    border: none;
    background: #ffffff;
    padding: 12px;
    font-size: 13px
    transition: 100ms ease;
    /* border-top-left-radius: 14px;
    border-bottom-left-radius: 14px; */
    svg {
      display: block;
    }
    &:hover {
      background: #f2f2f2 ;
    },
`;

const CardDetailItem = (props) => {
  return (
    <>
      <span style={{ fontWeight: "bold", fontSize: "13px" }}>
        {props.title}
      </span>
      {props.rows?.map((r) => (
        <div key={r} style={{ fontSize: "12px" }}>
          {r}
        </div>
      ))}
    </>
  );
};

const RecentDomainItem: FunctionComponent<Props> = (props) => {
  const cardDetails = (
    <Box
      sx={{
        padding: "15px 0 15px",
        margin: "0px 20px",
        borderTop: "2px dashed #d8d8d8",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <CardDetailItem title="Registrar" rows={["GoDaddy"]} />
        </Grid>
        <Grid item xs={3}>
          <CardDetailItem
            title="Name Servers"
            rows={["ns1.domain.com", "ns2.domain.com"]}
          />
        </Grid>
        <Grid item xs={3}>
          <CardDetailItem title="A-Record" rows={["75.103.71.153"]} />
          <CardDetailItem title="C-Name" rows={["75.103.71.153"]} />
        </Grid>
        <Grid item xs={3}>
          <CardDetailItem
            title="MX Records"
            rows={[
              "alt1.aspmx.l.google.com",
              "aspmx2.googlemail.com",
              "aspmx3.googlemail.com",
            ]}
          />
        </Grid>
      </Grid>
    </Box>
  );
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        border: "1px solid #bfbcbc;",
        borderRadius: "18px",
        // borderRadius: "24px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        marginTop: "15px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <button
          onClick={() => props.onClick(props.domain)}
          style={{
            justifyContent: "space-between",
            flexGrow: 1,
            paddingLeft: "20px",
          }}
          className={recentButtonStyle}
        >
          <span>{props.domain}</span>
          <span>
            <Search />
          </span>
        </button>
        <button className={recentButtonStyle}>
          <span>
            <Delete />
          </span>
        </button>
      </Box>
      {!props.activeDomainName && cardDetails}
    </Box>
  );
};

export default RecentDomainItem;
