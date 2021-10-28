import { CssBaseline } from "@mui/material";
import React from "react";

const index: React.FC = (props) => {
  return (
    <>
      <header>Header here</header>
      <main>{props.children}</main>
      <footer>Footer here</footer>
    </>
  );
};

export default index;
