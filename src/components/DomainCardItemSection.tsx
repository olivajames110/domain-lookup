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
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { Box } from "@mui/system";

interface Props {
  title: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  label?: string;
  rows?: Array<{ title: string; value: string }>;
  className?: string;
}

const DomainCardItemSection: FunctionComponent<Props> = (props) => (
  <Box sx={{ margin: "25px 0" }}>
    <span style={{ fontWeight: "bold", fontSize: "14px" }}>{props.title}</span>

    {props?.rows?.map((i) => {
      return (
        <Box
          key={Math.random()}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "8px",
            flexWrap: "nowrap",
          }}
        >
          {i.title && <span>{i.title}</span>}

          <Box
            sx={{
              borderBottom: "1px solid #eeeeee",
              padding: "3px 8px",
            }}
          >
            {i.value}
          </Box>
        </Box>
      );
    }) ?? null}
  </Box>
);

export default DomainCardItemSection;
