import { Paper, Grid } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <footer>
      <Paper square>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <small>
            Copyright &copy; {new Date().getFullYear()} All rights Reserved.
          </small>
          <small>Ordereze</small>
        </Grid>
      </Paper>
    </footer>
  );
};
