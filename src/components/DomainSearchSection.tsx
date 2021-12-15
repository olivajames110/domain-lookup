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
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { Box } from "@mui/system";

interface Props {
  title: string;
  domainSearchName: string;
  onChange?: () => null;
  domainSubmitHandler?: () => null;
}

const buttonStyle = css`
    width: 130px;
    height: 52px;
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

const styles = (theme: any) => ({
  textField: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
  },
  input: {
    color: "white",
  },
});

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
      {/* <InputLabel
        sx={{ fontWeight: "bold", marginBottom: "3px" }}
        htmlFor={"domain-search"}
      >
        Enter Your Domain
      </InputLabel> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          background: "#ffffff",
        }}
      >
        {/* <input
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
        /> */}
        <TextField
          name="domain-search"
          id="domain-search"
          label="Enter Your Domain"
          variant="outlined"
          onChange={props.onChange}
          inputProps={{
            style: {
              borderTopRightRadius: "0px !important",
              borderBottomRightRadius: "0px !important",
            },
          }}
          sx={{
            width: "100%",
            borderRadius: 0,
            borderTopRightRadius: "0px !important",
            borderBottomRightRadius: "0px !important",
            // height: "50px",
            // border: "1px solid #AFAFAF",
            // padding: "12px 16px",
            // borderRadius: "2px",
          }}
        />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"com"}
          onChange={props.topLevelDomainHandler}
          sx={{
            width: "160px",
            borderTopLeftRadius: "0px !important",
            borderBottomLeftRadius: "0px !important",
          }}
        >
          <MenuItem selected value={"com"}>
            .com
          </MenuItem>
          <MenuItem value={"biz"}>.biz</MenuItem>
          <MenuItem value={"edu"}>.edu</MenuItem>
          <MenuItem value={"net"}>.net</MenuItem>
          <MenuItem value={"org"}>.org</MenuItem>
          <MenuItem value={"gov"}>.gov</MenuItem>
          <MenuItem value={"io"}>.io</MenuItem>
        </Select>
        {/* <select
          onChange={props.topLevelDomainHandler}
          style={{
            height: "50px",
            border: "1px solid #AFAFAF",
            padding: "16px",
            // borderRadius: "2px",
          }}
        >
          <option selected value="com">
            .com
          </option>
          <option value="net">.net</option>
          <option value="org">.org</option>
          <option value="edu">.edu</option>
          <option value="gov">.gov</option>
          <option value="io">.io</option>
        </select> */}
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

export default DomainSearchSection;
