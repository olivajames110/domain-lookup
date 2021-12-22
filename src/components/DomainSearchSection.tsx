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
  Select,
  MenuItem,
  TextField,
  Autocomplete,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { Box } from "@mui/system";

interface Props {
  title: string;
  domainSearchName: string;
  domainSearchTopLevelDomain: string;
  onChange?: () => null;
  domainSubmitHandler?: () => null;
  topLevelDomainHandler?: () => null;
}

const buttonStyle = css`
    width: 180px;
    height: 52.7px;
    border: none;
    padding: 12px 16px;
    border-radius: 0;
    /* border-top-right-radius: 2px;
    border-bottom-right-radius: 2px; */
    background-color: #1e76ba;
    /* background-color: #312F2F; */
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

// const TLDOptions = [{ value: "com" }, { value: "net" }, { value: "org" }];
const TLDOptions = [
  { label: "com", value: "com" },
  { label: "net", value: "net" },
  { label: "org", value: "org" },
];

const DomainSearchSection: FunctionComponent<Props> = (props) => {
  return (
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#ffffff",
          }}
        >
          <TextField
            name="domain-search"
            id="domain-search"
            label="Enter Your Domain"
            variant="outlined"
            value={props.domainSearchName}
            onChange={props.onChange}
            inputProps={{
              style: {
                borderTopRightRadius: "0px !important",
                borderBottomRightRadius: "0px !important",
                borderRadius: 0,
              },
            }}
            sx={{
              width: "100%",
              borderRadius: "0px !important",
              borderTopRightRadius: "0px !important",
              borderBottomRightRadius: "0px !important",
            }}
          />
          <Box
            sx={{
              background: "#ededed",
              height: "52.7px",
              width: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
              borderTop: "1px solid #c4c4c4",
              borderBottom: "1px solid #c4c4c4",
            }}
          >
            .
          </Box>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={TLDOptions}
            value={props.domainSearchTopLevelDomain}
            onInputChange={(e, NewValue) => {
              console.log("E:", e);
              console.log("New Value", NewValue);
              props.topLevelDomainHandler(NewValue);
            }}
            sx={{ width: 300, borderRadius: 0 }}
            renderInput={(params) => <TextField {...params} />}
          />
          <button
            onClick={() => props.domainSubmitHandler()}
            className={buttonStyle}
          >
            <span>
              <Search fontSize="inherit" />
            </span>
            <span style={{ fontWeight: "bold" }}>Search</span>
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default DomainSearchSection;
