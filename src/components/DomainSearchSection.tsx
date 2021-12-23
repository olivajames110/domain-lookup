import React, { FunctionComponent } from "react";
import { css } from "@emotion/css";
import { TextField, Autocomplete } from "@mui/material";
import { Search } from "@mui/icons-material";
import { Box } from "@mui/system";

interface Props {
  title?: string;
  domainSearchName: string;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  domainSubmitHandler?: () => void;
}

const buttonStyle = css`
  width: 140px;
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
    background: #4b4b4b;
  }
`;

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
          padding: "0 0 22px 0",
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

          <button
            onClick={() => {
              if (props.domainSubmitHandler) props.domainSubmitHandler();
            }}
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
