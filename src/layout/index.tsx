import { Grid, Box } from "@mui/material";
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

const index: React.FC = (props) => {
  return (
    <Box display="flex">
      <Box flexShrink={0} minHeight="100vh">
        <Sidebar />
      </Box>

      <Box display="flex" flexDirection="column" width="100%" minHeight="100vh">
        <Header />

        <Box flex={1}>
          <main>{props.children}</main>
        </Box>

        <Footer />
      </Box>
    </Box>
  );
};

export default index;
