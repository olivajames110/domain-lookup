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
import DomainCardItemSection from "./DomainCardItemSection";

interface Props {
  title: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  data?: Array;
  className?: string;
}

const cardTitle = css`
  padding: 8px 0;
  font-size: 13px;
  svg {
    display: block;
    margin-right: 4px;
    height: 18px;
  }
`;

const DomainCardItem: FunctionComponent<Props> = (props) => (
  <Box sx={{ marginBottom: "30px", fontSize: "12px" }}>
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <span className={cardTitle}>{props.icon}</span>
      <span>{props.title}</span>
    </Box>
    <Box
      sx={{
        background: "#ffffff",
        borderRadius: "8px",
        border: "1px solid #b6b6b6",
        padding: "0  20px",
        minHeight: "320px",
        overflowY: "auto",
      }}
    >
      {props.data.map((s) => (
        <DomainCardItemSection
          key={Math.random()}
          title={s.title}
          rows={s.rows}
        />
      ))}
    </Box>
  </Box>
);

export default DomainCardItem;