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
import { LaunchOutlined, Search } from "@mui/icons-material";
import { Box } from "@mui/system";
import DomainCardItemSection from "./DomainCardItemSection";

interface Props {
  title: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  data?: Array<{ title: string; rows: any }>;
  href?: string;
  className?: string;
  href?: string;
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

const launchIcon = css`
  font-size: 13px;

  svg {
    display: block;
    margin-right: 4px;
    height: 12px;
  }
`;
// const launchIcon = css`
//   padding: 8px 0;
//   font-size: 13px;
//   margin-left: 10px;
//   svg {
//     display: block;
//     margin-right: 4px;
//     height: 12px;
//   }
// `;

const DomainCardItem: FunctionComponent<Props> = (props) => (
  <Box sx={{ marginBottom: "30px", fontSize: "12px", position: "relative" }}>
    <a
      href={props.href}
      target={"_blank"}
      className={cardTitle}
      rel="noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        maxWidth: "100px",
        color: "#333333",
        textDecoration: "none",
        marginBottom: "-5px",
      }}
    >
      <span className={cardTitle}>{props.icon}</span>
      <span>{props.title}</span>
    </a>
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
      {props.href && (
        <a
          href={props.href}
          target={"_blank"}
          className={cardTitle}
          rel="noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            right: 0,
            color: "#333333",
            textDecoration: "none",
            marginBottom: "-5px",
          }}
        >
          <Box className={launchIcon}>
            <LaunchOutlined />
          </Box>
        </a>
      )}
      {props.data.map((s) => (
        <DomainCardItemSection
          key={Math.random()}
          title={s.title}
          rows={s.rows}
        />
      )) ?? null}
    </Box>
  </Box>
);

export default DomainCardItem;
