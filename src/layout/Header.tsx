import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Box } from "@mui/system";

export const Header = () => {
  return (
    <AppBar
      sx={{ backgroundColor: "#ffffff", boxShadow: 0 }}
      position="relative"
    >
      <Toolbar>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {ozLogo}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const ozLogo = (
  <svg
    height="36px"
    id="oz"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 609.52 130.85"
  >
    <path
      d="M96.86,56.81A4.87,4.87,0,1,1,90.1,55.5a4.86,4.86,0,0,1,6.76,1.31m40.08,37.81a4.87,4.87,0,1,0-6.19,3,4.87,4.87,0,0,0,6.19-3m3.33,13.86a4.88,4.88,0,1,0-6.73,1.5,4.87,4.87,0,0,0,6.73-1.5m0,14.24a4.87,4.87,0,1,0-6.89-.07,4.86,4.86,0,0,0,6.89.07M137.1,136.6a4.87,4.87,0,1,0-6.69-1.65,4.86,4.86,0,0,0,6.69,1.65m-6.32,12.77a4.87,4.87,0,1,0-6.14-3.14,4.86,4.86,0,0,0,6.14,3.14m-9.09,11a4.87,4.87,0,1,0-5.25-4.47,4.86,4.86,0,0,0,5.25,4.47m-11.37,8.6a4.87,4.87,0,1,0-4.08-5.55,4.87,4.87,0,0,0,4.08,5.55m-13,5.75a4.87,4.87,0,1,0-2.7-6.33,4.85,4.85,0,0,0,2.7,6.33m-14,2.62a4.87,4.87,0,1,0-1.16-6.79,4.86,4.86,0,0,0,1.16,6.79M69,176.63a4.87,4.87,0,1,0,.43-6.87,4.88,4.88,0,0,0-.43,6.87M55.35,172.7a4.87,4.87,0,1,0,2-6.59,4.85,4.85,0,0,0-2,6.59m-12.43-7a4.87,4.87,0,1,0,3.46-5.95,4.87,4.87,0,0,0-3.46,5.95m-10.5-9.63a4.87,4.87,0,1,0,4.74-5,4.86,4.86,0,0,0-4.74,5m-8-11.78a4.87,4.87,0,1,0,5.75-3.79,4.86,4.86,0,0,0-5.75,3.79M19.33,131a4.87,4.87,0,1,0,6.47-2.36A4.88,4.88,0,0,0,19.33,131m-1.88-14.12a4.87,4.87,0,1,0,6.84-.82,4.86,4.86,0,0,0-6.84.82m1.4-14.18a4.86,4.86,0,1,0,6.85.77,4.86,4.86,0,0,0-6.85-.77m4.62-13.49A4.88,4.88,0,1,0,30,91.54a4.89,4.89,0,0,0-6.49-2.33m7.6-12a4.87,4.87,0,1,0,5.77,3.76,4.87,4.87,0,0,0-5.77-3.76m10.16-10a4.87,4.87,0,1,0,4.76,5,4.86,4.86,0,0,0-4.76-5m12.18-7.39a4.87,4.87,0,1,0,3.49,5.94,4.87,4.87,0,0,0-3.49-5.94M67,55.38A4.87,4.87,0,1,0,69,62a4.88,4.88,0,0,0-2-6.59m14.2-1.16a4.87,4.87,0,1,0,.46,6.88,4.85,4.85,0,0,0-.46-6.88m12.55,13a4,4,0,1,0-1.08,5.57,4,4,0,0,0,1.08-5.57m33.05,31.17a4,4,0,1,0-5.11,2.49,4,4,0,0,0,5.11-2.49m2.74,11.43A4,4,0,1,0,124,111a4,4,0,0,0,5.54-1.24m0,11.75a4,4,0,1,0-5.68-.06,4,4,0,0,0,5.68.06M126.9,133a4,4,0,1,0-5.52-1.36A4,4,0,0,0,126.9,133m-5.22,10.53a4,4,0,1,0-5.05-2.59,4,4,0,0,0,5.05,2.59m-7.49,9a4,4,0,1,0-4.32-3.68,4,4,0,0,0,4.32,3.68m-9.37,7.08a4,4,0,1,0-3.36-4.57,4,4,0,0,0,3.36,4.57m-10.75,4.76a4,4,0,1,0-2.22-5.23,4,4,0,0,0,2.22,5.23m-11.55,2.15a4,4,0,1,0-1-5.6,4,4,0,0,0,1,5.6M70.78,166a4,4,0,1,0,.36-5.67,4,4,0,0,0-.36,5.67m-11.29-3.24a4,4,0,1,0,1.64-5.44,4,4,0,0,0-1.64,5.44M49.24,157a4,4,0,1,0,2.85-4.92A4,4,0,0,0,49.24,157m-8.66-8a4,4,0,1,0,3.91-4.13A4,4,0,0,0,40.58,149M34,139.32a4,4,0,1,0,4.75-3.12A4,4,0,0,0,34,139.32m-4.19-11a4,4,0,1,0,5.34-2,4,4,0,0,0-5.34,2M28.23,116.7a4,4,0,1,0,5.65-.68,4,4,0,0,0-5.65.68M29.39,105a4,4,0,1,0,5.65.64,4,4,0,0,0-5.65-.64M33.2,93.89a4,4,0,1,0,5.35,1.92,4,4,0,0,0-5.35-1.92m6.27-10a4,4,0,1,0,4.77,3.11,4,4,0,0,0-4.77-3.11m8.37-8.23a4,4,0,1,0,3.93,4.11,4,4,0,0,0-3.93-4.11m10-6.1a4,4,0,1,0,2.88,4.9,4,4,0,0,0-2.88-4.9M69.07,66a4,4,0,1,0,1.67,5.43A4,4,0,0,0,69.07,66m11.71-1a4,4,0,1,0,.39,5.67A4,4,0,0,0,80.78,65m37.1,18.42a4,4,0,1,0,3.59,4.4A4,4,0,0,0,117.88,83.45ZM104.49,71.84A4,4,0,1,0,102.16,77,4,4,0,0,0,104.49,71.84Zm21.68,4.72a4.87,4.87,0,1,0,4.35,5.34A4.86,4.86,0,0,0,126.17,76.56ZM109.93,62.47a4.87,4.87,0,1,0-2.83,6.29A4.87,4.87,0,0,0,109.93,62.47Z"
      transform="translate(-16.4 -47.42)"
      style={{ fill: "#8cc341" }}
    />
    <path
      d="M67.16,126.3l-4.57,17.27L51,133.86ZM143,48.74l-.1.07q-1.77,1.13-3.51,2.28c-5,3.4-9.75,6.93-14.21,10.51q-3.45,2.77-6.67,5.58-3.44,3-6.62,5.93l-2.41,2.29c-1.2,1.14-2.37,2.27-3.51,3.41q-2.82,2.79-5.42,5.51a322.82,322.82,0,0,0-23.28,27.45c-5,6.73-7.67,10.88-7.83,11.13.19-.24,3.25-4.07,8.83-10.32a348.18,348.18,0,0,1,25-25.54q2.23-2.1,4.62-4.24,2.78-2.49,5.76-5l1.7-1.44c1.91-1.61,3.89-3.22,5.91-4.83l.17-.14q3.92-3.12,8.11-6.23c4.18-3.08,8.58-6.1,13.2-9a29.51,29.51,0,0,0,6.16-5.2l.5-1C149.9,46.61,146.48,47,143,48.74Z"
      transform="translate(-16.4 -47.42)"
      style={{ fill: "#1e76ba" }}
    />
    <path
      d="M174.53,137.92V92.78h9.9q9.65,0,13.58,1A18.37,18.37,0,0,1,204.9,97a19,19,0,0,1,5.94,7.68,26.76,26.76,0,0,1,2,10.7,26.38,26.38,0,0,1-2,10.65,19.24,19.24,0,0,1-5.94,7.67,18.47,18.47,0,0,1-6.73,3.25,51.48,51.48,0,0,1-11.77,1H174.53Zm7.34-6.63H188a31.45,31.45,0,0,0,7.63-.68,11.09,11.09,0,0,0,4.42-2.28,13.5,13.5,0,0,0,3.84-5.44,23,23,0,0,0,0-15.14,13.5,13.5,0,0,0-3.84-5.44,11.43,11.43,0,0,0-4.58-2.29,37.15,37.15,0,0,0-8.34-.67h-5.3Zm36.69-7.95a15.29,15.29,0,0,1,1.22-6.06,15.57,15.57,0,0,1,3.5-5.08,15.9,15.9,0,0,1,5.18-3.36,16.88,16.88,0,0,1,12.35,0A15.8,15.8,0,0,1,246,112.3a15.46,15.46,0,0,1,3.51,5.08,15.18,15.18,0,0,1,1.2,6,15.6,15.6,0,0,1-1.18,6.07,14.89,14.89,0,0,1-3.47,5,16.8,16.8,0,0,1-5.34,3.5,16.54,16.54,0,0,1-12.27,0,16.22,16.22,0,0,1-8.72-8.56A15.19,15.19,0,0,1,218.56,123.34Zm25.13.06a9.72,9.72,0,0,0-2.62-6.89,8.66,8.66,0,0,0-12.81,0,10.31,10.31,0,0,0,0,13.78,8.67,8.67,0,0,0,12.8,0A9.75,9.75,0,0,0,243.69,123.4Zm20.85,14.52h-6.69V108.69h6.29v4.78a13.11,13.11,0,0,1,4.55-4.46,12.25,12.25,0,0,1,6-1.4,10.47,10.47,0,0,1,5.68,1.43,8.88,8.88,0,0,1,3.42,4.37A15.39,15.39,0,0,1,288.7,109a12.33,12.33,0,0,1,5.93-1.39,11.32,11.32,0,0,1,5.06,1.06,7.87,7.87,0,0,1,3.36,3.1,7.56,7.56,0,0,1,.82,2.28,21.41,21.41,0,0,1,.26,3.8v20.07h-6.69v-15c0-3.92-.42-6.51-1.25-7.75s-2.32-1.87-4.46-1.87q-3.94,0-5.62,2.52c-1.12,1.67-1.68,4.61-1.68,8.8v13.32h-6.76v-15c0-3.61-.43-6.12-1.31-7.52s-2.38-2.1-4.52-2.1a7.34,7.34,0,0,0-3.6.9,6.8,6.8,0,0,0-2.59,2.46,7.22,7.22,0,0,0-.87,2.5,40.63,40.63,0,0,0-.24,5.46Zm76.07,0h-6.69v-3.79a11.1,11.1,0,0,1-9.66,5,12.07,12.07,0,0,1-9.76-4.24q-3.56-4.23-3.56-11.61,0-7,3.64-11.3a12.85,12.85,0,0,1,15.62-2.8,8.76,8.76,0,0,1,3.72,4.3v-4.78h6.69Zm-6.51-14.71a10.7,10.7,0,0,0-2.11-7.06,8.14,8.14,0,0,0-11.87.08,11,11,0,0,0-2.18,7.23c0,3.1.7,5.5,2.1,7.18a7.91,7.91,0,0,0,11.79-.21A11,11,0,0,0,334.1,123.21Zm15.17-27.16a4,4,0,0,1,1.25-2.93,4.09,4.09,0,0,1,3-1.24,4.07,4.07,0,0,1,4.16,4.17,4.1,4.1,0,0,1-1.2,3,4,4,0,0,1-3,1.22,4.27,4.27,0,0,1-4.23-4.22Zm.9,41.87V108.69h6.69v29.23Zm16.25,0V108.69h6.29v4.78a12.46,12.46,0,0,1,4.71-4.41,14.31,14.31,0,0,1,6.6-1.39,13.68,13.68,0,0,1,5.57,1,8.11,8.11,0,0,1,3.59,3.07,8.52,8.52,0,0,1,1.11,2.81,30.89,30.89,0,0,1,.34,5.61v17.73h-6.75v-15q0-5.76-1.41-7.66t-5-1.89a9.6,9.6,0,0,0-4.17.86,6.91,6.91,0,0,0-2.89,2.43,6.63,6.63,0,0,0-1,2.7,33,33,0,0,0-.29,5.26v13.32Zm56.73,0V92.78h7.34v38.57h16.4v6.57Zm27-14.58a15.29,15.29,0,0,1,1.22-6.06,15.57,15.57,0,0,1,3.5-5.08,15.9,15.9,0,0,1,5.18-3.36,16.88,16.88,0,0,1,12.35,0,15.9,15.9,0,0,1,5.23,3.46,15.46,15.46,0,0,1,3.51,5.08,15.18,15.18,0,0,1,1.2,6,15.6,15.6,0,0,1-1.18,6.07,15,15,0,0,1-3.47,5,16.91,16.91,0,0,1-5.34,3.5,16.54,16.54,0,0,1-12.27,0,16.28,16.28,0,0,1-8.73-8.56A15.36,15.36,0,0,1,450.13,123.34Zm25.13.06a9.72,9.72,0,0,0-2.62-6.89,8.66,8.66,0,0,0-12.81,0,10.31,10.31,0,0,0,0,13.78,8.67,8.67,0,0,0,12.8,0A9.75,9.75,0,0,0,475.26,123.4Zm12-.06a15.29,15.29,0,0,1,1.21-6.06,15.72,15.72,0,0,1,3.5-5.08,15.9,15.9,0,0,1,5.18-3.36,16.88,16.88,0,0,1,12.35,0,16.47,16.47,0,0,1,8.75,8.54,15.18,15.18,0,0,1,1.2,6,15.61,15.61,0,0,1-1.19,6.07,14.89,14.89,0,0,1-3.47,5,16.87,16.87,0,0,1-5.33,3.5,16.32,16.32,0,0,1-6.17,1.18A16,16,0,0,1,492,134.5a15.82,15.82,0,0,1-3.51-5.12A15.36,15.36,0,0,1,487.26,123.34Zm25.13.06a9.77,9.77,0,0,0-2.62-6.89,8.67,8.67,0,0,0-12.82,0,10.34,10.34,0,0,0,0,13.78,8.67,8.67,0,0,0,12.8,0A9.71,9.71,0,0,0,512.39,123.4Zm14.15,14.52V90.13h6.69v30.68l12.24-12.12h8.27l-13.26,12.89L555,137.92h-8.63l-13.14-15.08v15.08Zm39.07-29.23v16.47c0,2.83.58,4.87,1.76,6.1s3.07,1.85,5.7,1.85,4.53-.62,5.7-1.85,1.76-3.27,1.76-6.1V108.69h6.69v14.46q0,8.39-3.36,12.18t-10.73,3.79q-7.49,0-10.85-3.76t-3.36-12.21V108.69Zm30.65,43v-43H603v4.78a8.82,8.82,0,0,1,3.75-4.29,12,12,0,0,1,6.15-1.51,11.8,11.8,0,0,1,9.45,4.3q3.62,4.31,3.62,11.3,0,7.38-3.56,11.61a12.05,12.05,0,0,1-9.76,4.24,11.1,11.1,0,0,1-9.65-5v17.54Zm6.47-28.46a11,11,0,0,0,2.27,7.25,7.39,7.39,0,0,0,6,2.71,7.16,7.16,0,0,0,5.87-2.53c1.39-1.68,2.08-4.08,2.08-7.18a11,11,0,0,0-2.17-7.23,8.16,8.16,0,0,0-11.89-.08A10.65,10.65,0,0,0,602.73,123.21Z"
      transform="translate(-16.4 -47.42)"
      style={{ fill: "#1e76ba" }}
    />
  </svg>
);
