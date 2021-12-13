import React, { FunctionComponent } from "react";
import { css } from "@emotion/css";
import { Delete, Search } from "@mui/icons-material";
import { Box } from "@mui/system";

interface Props {
  domain: string;
  label?: string;
  className?: string;
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

const RecentDomainItem: FunctionComponent<Props> = (props) => (
  <Box
    sx={{
      backgroundColor: "#ffffff",
      border: "1px solid #bfbcbc;",
      borderRadius: "24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      overflow: "hidden",
      marginTop: "15px",
    }}
  >
    <button
      style={{
        justifyContent: "space-between",
        flexGrow: "1",
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
);

export default RecentDomainItem;
