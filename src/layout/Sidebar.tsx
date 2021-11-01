import { css } from "@emotion/css";
import {
  Box,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  Paper,
  Toolbar,
} from "@mui/material";
import { Home, Web } from "@mui/icons-material";
import React from "react";
import NavLink from "src/components/elements/NavLink";
import { width } from "@mui/system";

export const Sidebar = () => {
  return (
    <nav>
      <Paper square sx={{ minHeight: "100vh", width: 200 }}>
        <Toolbar disableGutters>
          <NavLink to="/" icon={Home}>
            Home Page
          </NavLink>
        </Toolbar>
        <Divider />
        <List>
          <NavLink to="/Domain" icon={Web}>
            Domain
          </NavLink>
        </List>
      </Paper>
    </nav>
  );
};
