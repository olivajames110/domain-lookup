import { Grid, Box, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

const themeOptions = {
  palette: {
    primary: {
      main: "#1e76ba",
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontSize: 12,
  },
};

const theme = createTheme(themeOptions);

const index: React.FC = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box sx={{ background: "#F6F4F4" }} display="flex">
        {/* <Box flexShrink={0} minHeight="100vh">
          <Sidebar />
        </Box> */}

        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          minHeight="100vh"
        >
          <Box flex={1}>
            <main>{props.children}</main>
          </Box>

          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default index;
