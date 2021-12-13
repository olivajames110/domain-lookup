import React, { FunctionComponent } from "react";
import { css } from "@emotion/css";
import {
  SvgIconProps,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Card,
  CardContent,
  Icon,
  InputLabel,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { Box } from "@mui/system";

interface Props {
  title: string;
  domainSearchName: string;
  onChange?: () => null;
}

const buttonStyle = css`
    width: 130px;
    height: 50px;
    border: none;
    padding: 12px 16px;
    border-radius: 0;
    /* border-top-right-radius: 2px;
    border-bottom-right-radius: 2px; */
    background-color: #312F2F;
    color: #ffffff;
    font-size: 14px;
    /* transition: 140ms; */
    display: flex; 
    justify-content: space-evenly;
    align-items: center;
    transition: 100ms ease;
    cursor: pointer;
    
    svg {
      display: block;
    }
    &:hover {
      background: #4b4b4b ;
    },
    `;

const DomainSearchSection: FunctionComponent<Props> = (props) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      padding: "12px",
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
          onChange={props.onChange}
          value={props.domainSearchName}
          type="text"
          name="domain-search"
          id="domain-search"
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
);

export default DomainSearchSection;
